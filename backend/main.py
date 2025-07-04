from dotenv import load_dotenv
from transformers import CLIPProcessor, CLIPModel
from PIL import Image
from pinecone import Pinecone, PodSpec
import torch
import os
import uvicorn
from fastapi import FastAPI, Request
from pydantic import BaseModel
from typing import List
from groq import Groq

load_dotenv()

# Load pinecone
pc = Pinecone(api_key=os.getenv("PINE_CONE"))
index = pc.Index("menfit")

# Load fastapi
app = FastAPI()

# Load qroq
client = Groq(api_key=os.getenv("GROQ_API"))

# Load FashionCLIP model and processor from Hugging Face
model_name = "patrickjohncyh/fashion-clip"
model = CLIPModel.from_pretrained(model_name)
processor = CLIPProcessor.from_pretrained(model_name)

def vectorize(text):
    txt_inputs = processor(text=text, return_tensors="pt", padding=True)
    text_emb = model.get_text_features(**txt_inputs)
    text_emb = torch.nn.functional.normalize(text_emb, p=2, dim=1)
    return text_emb.cpu().tolist()


def gen_tags(prompt):
    completion = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
              "role": "system",
              "content": "You are a fashion assistant Al. Given a user's outfit prompt, extract up to 10 relevant descriptive tags. in JSON format. The tags will be used to search a fashion product database.\n\nTags can include clothing types, styles, seasons, occasions, aesthetics, gender hints, materials.... etc\n\nOnly return a flat JSON array of lowercase string tags.\nAvoid explanations or nested objects. Output only JSON.\noutput json example:\n\n{\n  \"tags\": [\"casual\", \"mall\", \"cute\", \"comfy\", \"friends\", \"outfit\"]\n}\n\n\nThe possible tags are:\n- gender (e.g., \"men\", \"women\", \"unisex\")\n- occasion (e.g., \"wedding\", \"casual\", \"beach\", \"business\", \"party\")\n- season (e.g., \"summer\", \"winter\", \"spring\", \"fall\")\n- style (e.g., \"formal\", \"semi-formal\", \"relaxed\", \"trendy\", \"classic\")\n- item (e.g., \"dress\", \"suit\", \"shorts\", \"jacket\", \"sneakers\")\netc...."
            },
            {
              "role": "user",
              "content": prompt
            }
        ],
        temperature=1,
        max_completion_tokens=1024,
        top_p=1,
        stream=False,
        response_format={"type": "json_object"},
        stop=None,
    )
    try:
        return completion.choices[0].message
    except:
        return ""


@app.get("/")
def root():
    return {"msg": "Hallllooo!"}

@app.post("/api/query")
def vectorize_prompt(data: dict):
    prompt = data["prompt"]
    vector = vectorize(prompt)      # Get vector from FashionCLIP
    print("Vector:", type(vector), len(vector), type(vector[0]))
    tags = gen_tags(prompt)         # Use LLaMA or NLP to generate prompt tags

    # Pinecone query with tag filter
    results = index.query(
        vector=vector,
        top_k=20,
        include_metadata=True,
        include_values=False,
        filter={
            "tags": {"$in": tags}
        }
    )

    fits = []
    for item in results:
        meta = item['metadata']
        fits.append(
            f"- ID: {meta['id']}\n"
            f"  item: {meta['item']}\n"
            f"  Name: {meta['name']}\n"
            f"  Brand: {meta['brand']}\n"
            f"  Description: {meta['description']}\n"
            f"  tags: {meta['tags']}\n"
        )

    return fits

uvicorn.run(app, host="0.0.0.0", port=8000)