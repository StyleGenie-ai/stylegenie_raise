from transformers import CLIPProcessor, CLIPModel
from PIL import Image
from pinecone import Pinecone, PodSpec
import torch
import os
from fastapi import FastAPI, Request
from pydantic import BaseModel
from typing import List

app = FastAPI()

pc = Pinecone(api_key=os.getenv("PINE_CONE"))
index = pc.Index("menfit")

# Load FashionCLIP model and processor from Hugging Face
model_name = "patrickjohncyh/fashion-clip"
model = CLIPModel.from_pretrained(model_name)
processor = CLIPProcessor.from_pretrained(model_name)

def vectorize(text):
    txt_inputs = processor(text=text, return_tensors="pt", padding=True)
    text_emb = model.get_text_features(**txt_inputs)
    text_emb = torch.nn.functional.normalize(text_emb, p=2, dim=1)
    return text_emb.cpu().tolist()


@app.get("/")
def root():
    return {"msg": "Hallllooo!"}

@app.post("/api/query")
def vectorize_prompt(data: dict):
    prompt = data["prompt"]
    vector = vectorize(prompt)
    # get tags from llama3 from groq using the prompt

    results = index.query(
        vector=vector,
        top_k=10,
        include_metadata=True,
        include_values=False
    )

    response = [
        {
            "id": match["id"],
            "score": match["score"],
            "metadata": match.get("metadata", {})
        }
        for match in results["matches"]
    ]

    return response
