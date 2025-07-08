from uagents import Agent, Context, Protocol
import whisper
import tempfile
import os
import base64
from pydantic import BaseModel

# Initialize the agent
agent = Agent(
    name="voice_to_text_agent",
    seed="voice_to_text_totallyy_unique_seeed",
    port=8000,
    endpoint=["http://localhost:8000/submit"],
)

# Message models
class AudioMessage(BaseModel):
    audio_data: str  # base64 encoded audio
    format: str = "mp3"

class TextResponse(BaseModel):
    text: str
    success: bool
    error: str = ""

# Global model variable
model = None

async def load_whisper_model():
    """Load Whisper model asynchronously"""
    global model
    if model is None:
        print("Loading Whisper model...")
        model = whisper.load_model("base")
        print("Whisper model loaded!")
    return model

def transcribe_audio_file(audio_data: str, format: str = "mp3"):
    """Transcribe audio from base64 encoded data"""
    try:
        # Decode base64 audio
        audio_bytes = base64.b64decode(audio_data)
        
        # Save to temporary file
        with tempfile.NamedTemporaryFile(suffix=f".{format}", delete=False) as tmp_file:
            tmp_file.write(audio_bytes)
            tmp_file_path = tmp_file.name
        
        # Transcribe using Whisper
        result = model.transcribe(tmp_file_path)
        
        # Clean up
        os.unlink(tmp_file_path)
        
        return result["text"]
    
    except Exception as e:
        raise Exception(f"Transcription failed: {str(e)}")

# Protocol for handling messages
transcription_protocol = Protocol()

@transcription_protocol.on_message(model=AudioMessage)
async def handle_audio(ctx: Context, sender: str, msg: AudioMessage):
    """Handle incoming audio for transcription"""
    try:
        # Ensure model is loaded
        await load_whisper_model()
        
        # Transcribe the audio
        text = transcribe_audio_file(msg.audio_data, msg.format)
        
        # Send back the transcribed text
        response = TextResponse(text=text, success=True)
        await ctx.send(sender, response)
        
        ctx.logger.info(f"Transcribed: {text[:50]}...")
        
    except Exception as e:
        # Send error response
        response = TextResponse(text="", success=False, error=str(e))
        await ctx.send(sender, response)
        ctx.logger.error(f"Transcription error: {e}")

@transcription_protocol.on_message(model=str)
async def handle_text(ctx: Context, sender: str, msg: str):
    """Handle simple text messages"""
    if msg.lower() == "status":
        await ctx.send(sender, "✅ Voice-to-Text Agent is running! Send AudioMessage for transcription.")
    
    elif msg.lower() == "help":
        help_text = """
🎤 Voice-to-Text Agent Help:
• Send AudioMessage with base64 encoded audio
• Supported formats: mp3, wav, m4a, flac
• Returns TextResponse with transcribed text
• Send 'status' to check agent health
        """
        await ctx.send(sender, help_text)
    
    elif msg.lower() == "ping":
        await ctx.send(sender, "pong")
    
    else:
        await ctx.send(sender, "Send audio files for transcription or 'help' for instructions.")

# Include the protocol
agent.include(transcription_protocol)

@agent.on_event("startup")
async def startup_event(ctx: Context):
    """Agent startup event"""
    ctx.logger.info("🎤 Voice-to-Text Agent started!")
    ctx.logger.info("Ready to receive audio files for transcription")
    
    # Pre-load the model
    try:
        await load_whisper_model()
        ctx.logger.info("✅ Whisper model ready")
    except Exception as e:
        ctx.logger.error(f"❌ Failed to load Whisper model: {e}")

@agent.on_event("shutdown")
async def shutdown_event(ctx: Context):
    """Agent shutdown event"""
    ctx.logger.info("🔄 Voice-to-Text Agent shutting down...")

if __name__ == "__main__":
    print("🚀 Starting Voice-to-Text Agent...")
    print("Ready to receive audio files and return transcribed text")
    agent.run()