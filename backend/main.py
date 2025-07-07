import os, json, uvicorn, torch
import open_clip
from dotenv import load_dotenv
from transformers import CLIPProcessor, CLIPModel
from PIL import Image
from pinecone import Pinecone
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq

load_dotenv()

# Load pinecone
pc = Pinecone(api_key=os.getenv("PINE_CONE"))
index_m = pc.Index("menf")
index_w = pc.Index("womenf")

# Load fastapi
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000", "*"],  # your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load qroq
client = Groq(api_key=os.getenv("GROQ_API"))

model, preprocess_train, preprocess_val = open_clip.create_model_and_transforms('hf-hub:Marqo/marqo-fashionSigLIP')
tokenizer = open_clip.get_tokenizer('hf-hub:Marqo/marqo-fashionSigLIP')

device = "cuda" if torch.cuda.is_available() else "cpu"
model.to(device)
model.eval()

def vectorize(text):
    text = tokenizer([text]).to(device)
    with torch.cuda.amp.autocast(enabled=device.startswith("cuda")):
        text_emb = model.encode_text(text, normalize=True)
    return text_emb.squeeze(0).cpu().tolist()

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
        content = completion.choices[0].message.content
        return json.loads(content)['tags']
    except:
        return ""

def gen_fits(prompt):
    completion = client.chat.completions.create(
        model="meta-llama/llama-4-scout-17b-16e-instruct",
        messages=[
            {
              "role": "system",
              "content": "You are a fashion assistant AI.\n\nYour task is to generate a fashionable outfit in response to a user prompt. An outfit must include exactly 3 pieces: a **top**, a **bottom**, and **shoes**.\n\nHowever, if the selected top is a one-piece item such as a **dress** or **minidress**, you MUST skip the bottom piece entirely.\n\nEach piece must include:\n- an `item` (selected from the fixed list of possible items),\n- and a list of `tags` (selected from the provided list of valid tags).\n\nDO NOT invent any tags or item types outside the provided arrays. No explanations. Only return valid JSON, no nesting or extra fields.\n\n❗ NEVER skip the bottom unless the top is exactly \"dress\" or \"minidress\".\n\n---\n\nAvailable items: ['skort', 'jacket', 'tights', 'bodysuit', 'skirt', 'pants', 'trousers', 'tote', 'bracelet', 'bra', 'loafers', 'wallet', 'coat', 'miniskirt', 'hoodie', 'dress', 'heels', 'mules', 'bag', 'belt', 'jeans', 'shorts', 'boots', 'sandals', 'sweatshirt', 'derbys', 'trousers.', 'sneakers', 'sweater', 'shirt', 'minidress', 'top', 't-shirt', 'camisole', 'vest', 'turtleneck', 'flats', 'polo', 'blouse', 'cardigan', 'henley', 'blazer', 'headband']\n\nAvailable tags: ['skort', 'sexy', 'gym', 'trousers', 'lightblue', 'pink', 'coat', 'travel', 'attractive', 'hoodie', 'belt', 'bag', 'jeans', 'olive', 'floral', 'striped', 'purple', 'luxury', 'sneakers', 'grey', 'lightweight', 'comfy', 'yellow', 'layering', 'casual', 'romance', 't-shirt', 'brown', 'camisole', 'turtleneck', 'swim', 'henley', 'polo', 'headband', 'tights', 'jacket', 'polca-dots', 'pants', 'tote', 'breath', 'bracelet', 'date', 'multicolor', 'miniskirt', 'dress', 'bold', 'pool', 'sandals', 'sweatshirt', 'nostalgic', 'blue', 'derbys', 'shirt', 'silver', 'mint', 'hot', 'sport', 'modest', 'top', 'date-night', 'workout', 'green', 'business', 'streetwear', 'trendy', 'cardigan', 'navy', 'taupe', 'bodysuit', 'blush', 'mules', 'gray', 'breathable', 'bikini', 'lavender', 'khaki', 'fit', 'summer', 'boots', 'white', 'trousers.', 'black', 'sweater', 'beach', 'formal', 'swimwear', 'burgundy', 'urban', 'work', 'blouse', 'cool', 'winter', 'burgundy, blue', 'ivory', 'ocean', 'skirt', 'bra', 'loafers', 'wallet', 'heels', 'light', 'shorts', 'conservative', 'red', 'professional', 'minimalist', 'maximalist', 'camo', 'minidress', 'retro', 'office', 'orange', 'peach', 'vest', 'beige', 'party', 'flats', 'blazer', 'vintage']\n\n---\n\nRespond in **pure JSON** format like:\n\n{\n  \"top\": {\n    \"item\": \"blouse\",\n    \"tags\": [\"formal\", \"white\", \"elegant\"]\n  },\n  \"bottom\": {\n    \"item\": \"skirt\",\n    \"tags\": [\"romance\", \"pink\", \"lightweight\"]\n  },\n  \"shoes\": {\n    \"item\": \"heels\",\n    \"tags\": [\"date-night\", \"stylish\", \"luxury\"]\n  }\n}\n\nExample (if top doesn't need a bottom ONLY):\n\n{\n  \"top\": {\n    \"item\": \"dress\",\n    \"tags\": [\"summer\", \"casual\", \"lightweight\"]\n  },\n  \"shoes\": {\n    \"item\": \"sandals\",\n    \"tags\": [\"white\", \"comfortable\", \"travel\"]\n  }\n}\n\n\n---"
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
        content = completion.choices[0].message.content
        return json.loads(content)
    except:
        return ""

def gen_fits_men(prompt):
    completion = client.chat.completions.create(
        model="meta-llama/llama-4-scout-17b-16e-instruct",
        messages=[
            {
              "role": "system",
              "content": "You are a fashion assistant AI.\n\nYour task is to generate a fashionable men's outfit in response to a user prompt. An outfit must include **exactly 3 pieces**: a **top**, a **bottom**, and **shoes**.\n\nEach piece must include:\n- an `item` (selected from the fixed list of possible items),\n- and a list of `tags` (selected from the provided list of valid tags).\n\nDO NOT invent any tags or item types outside the provided arrays. No explanations. Only return valid JSON, no nesting or extra fields.\n\n---\n\nAvailable items: ['jacket', 'pants', 'trousers', 'sweatpants', 'bracelet', 'scarf', 'tote', 'loafers', 'backpack', 'coat', 'wallet', 'hoodie', 'belt', 'bag', 'shorts', 'jeans', 'suitcase', 'sandals', 'sweatshirt', 'shoes', 'sneakers', 'sweater', 'cap', 'shirt', 'top', 't-shirt', 'balaclava', 'vest', 'turtleneck', 'polo', 'cardigan', 'blazer']\n\nAvailable tags: ['black, white', 'sexy', 'gym', 'trousers', 'pink', 'coat', 'travel', 'attractive', 'hoodie', 'belt', 'bag', 'jeans', 'olive', 'floral', 'striped', 'shoes', 'purple', 'luxury', 'sneakers', 'grey', 'indigo', 'lightweight', 'comfy', 'yellow', 'layering', 'casual', 'romance', 't-shirt', 'brown', 'turtleneck', 'polo', 'jacket', 'pants', 'bracelet', 'breath', 'sweatpants', 'tote', 'date', 'backpack', 'multicolor', 'beige,black', 'bold', 'pool', 'sandals', 'sweatshirt', 'nostalgic', 'blue', 'shirt', 'silver', 'hot', 'sport', 'modest', 'top', 'date-night', 'workout', 'green', 'business', 'streetwear', 'trendy', 'cardigan', 'navy', 'taupe', 'gray', 'breathable', 'suitcase', 'khaki', 'summer', 'fit', 'white', 'black', 'sweater', 'plaid', 'beach', 'formal', 'burgundy', 'urban', 'work', 'cool', 'winter', 'ivory', 'scarf', 'loafers', 'wallet', 'tan', 'light', 'shorts', 'conservative', 'red', 'professional', 'minimalist', 'maximalist', 'cap', 'camo', 'retro', 'animal', 'office', 'orange', 'balaclava', 'vest', 'beige', 'party', 'blazer', 'vintage']\n\n---\n\nRespond in **pure JSON** format like:\n\n```json\n{\n  \"top\": {\n    \"item\": \"hoodie\",\n    \"tags\": [\"casual\", \"comfy\", \"cool\"]\n  },\n  \"bottom\": {\n    \"item\": \"jeans\",\n    \"tags\": [\"blue\", \"urban\", \"fit\"]\n  },\n  \"shoes\": {\n    \"item\": \"sneakers\",\n    \"tags\": [\"white\", \"comfortable\", \"streetwear\"]\n  }\n}\n```\n---"
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
        content = completion.choices[0].message.content
        return json.loads(content)
    except:
        return ""


def recommend_fits(fits, prompt):
    response = {"user_prompt": prompt, "products": fits}
    completion = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
              "role": "system",
              "content": "**Input:**\n\n* `user_prompt`: A string containing the user's fashion query or need (e.g. \"I want a dress for a summer wedding\")\n* `products`: A list of dictionaries, each containing information about a product (e.g. dress, top, pants, etc.)\n  + Each product has the following structure:\n\n  ```json\n  {\n    \"ID\": \"string\",             // Unique identifier of the product\n    \"item\": \"string\",           // Type of product (e.g. dress, top, pants)\n    \"Name\": \"string\",           // Name of the product\n    \"Brand\": \"string\",          // Brand of the product\n    \"Description\": \"string\",    // A detailed description of the product\n    \"tags\": [\"string\", ...]     // A list of descriptive tags for the product\n  }\n  ```\n\n**Task:**\n\nRecommend the top 6 products that are most compatible with the user's needs based on the user's prompt and the information in the products list.\n\n**Output:**\n\nA list of the top 6 recommended products, with the following information for each product:\n\n* `ID`: The id of the product\n\n**Example Input:**\n\n```json\n{\n    \"user_prompt\": \"going to a wedding by the beach, need a dress that’s flowy and not too formal\",\n    \"products\": [\n    {\n        \"ID\": \"5bdd55c8-ed6d-4cc0-9a8d-b6621e234b81\",\n        \"item\": \"Dress\",\n        \"Name\": \"Black Slinky Gabe Midi Dress\",\n        \"Brand\": \"HIGH SPORT\",\n        \"Description\": \"**Command attention in the HIGH SPORT Black Slinky Gabe Midi Dress. This luxurious slinky....\",\n        \"tags\": [\"dress\", \".....\"]\n    },\n    {\n        \"ID\": \"20ed4f2e-0a49-43c8-b306-7705715501b9\",\n        \"item\": \"Shirt\",\n        \"Name\": \"Black Embellished Metal Shirt\",\n        \"Brand\": \"LEMAIRE\",\n        \"Description\": \"**Option 1 (Concise & Edgy):**\\n\\nLEMAIRE Black Embellished Metal Shirt. Effortless cool....\",\n        \"tags\": [\"effortless\",\"shirt effortless\",\"elevate\",\"night\",\"concise\",]\n    },\n    {\n        \"ID\": \"939a7dc7-e4d9-4093-ab70-0cdc411732dc\",\n        \"item\": \"T-shirt\",\n        \"Name\": \"White Chouchou T-shirt\",\n        \"Brand\": \"SANDY LIANG\",\n        \"Description\": \"**Option 1 (Focus on simplicity and luxury):**\\n\\nEffortless cool, elevated....\",\n        \"tags\": [\"brand\",\"style\",\"subtle details\",\"shirt\",]\n    },\n    {\n        \"ID\": \"7b91fca5-ab0d-4884-b2f5-99bdcacb1f9c\",\n        \"item\": \"Minidress\",\n        \"Name\": \"Blue Knitted Shift Minidress\",\n        \"Brand\": \"JW ANDERSON\",\n        \"Description\": \"Effortlessly chic: the JW Anderson Blue Knitted Shift Minidress....\",\n        \"tags\": [\"fashion\",\"effortless\",\"fashion jw\",\"high\",\"high fashion\",]\n    },\n    {....}\n    ]\n}\n```\n\n**Example Output:**\n\n```json\n{\n   \"recommended_products\": [\n      \"62808253-5515-4b48-a206-4ed89e8fa54e\",\n      \"eef27db6-7c3b-4486-a7b9-24f57f74a845\",\n      \"9614b158-0a71-4578-9cae-5438c7e33548\",\n      \"b33146e0-562a-4bcc-9cd7-46bb48a6cae0\",\n      \"82ea500b-7000-41dd-93b0-2d41b1cacec2\",\n      \"cbe8a6eb-9d6d-48cd-9f7f-3d3f4a7a0f2a\"\n   ]\n}\n```\n\nThis output indicates that the Llama3 model has analyzed the user's prompt and the information about the products, and has determined that the top 6 most compatible products are the summer dresses and other products that are suitable for casual occasions or have some features that match the user's needs but are not as closely matched as the dresses are.\nYou are expected to reason carefully and base your picks on how well the product's content matches the prompt, style, season, occasion, tone, and intent."
            },
            {
              "role": "user",
              "content": response
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
        content = completion.choices[0].message.content
        return json.loads(content)["recommended_products"]
    except:
        return []


def fetch_fits(fits):
    response = []
    fetch_result = index.fetch(ids=fits)

    for id_, record in fetch_result.vectors.items():
        meta = record.metadata
        response.append({
            "ID": id_,
            "item": meta.get("item"),
            "Name": meta.get("name"),
            "Brand": meta.get("brand"),
            "Description": meta.get("description"),
            "tags": meta.get("tags"),
            "image": meta.get("image"),
            "link": meta.get("link"),
            "price": meta.get("price")
        })

    return response



@app.get("/")
def root():
    return {"msg": "Hallllooo!"}

@app.post("/api/query")
def vectorize_prompt(data: dict):
    prompt = data["prompt"]
    vector = vectorize(prompt)      # Get vector from FashionCLIP
    tags = gen_tags(prompt)         # Use LLaMA or NLP to generate prompt tags
    print(tags)

    # Pinecone query with tag filter
    results = index_w.query(
        vector=vector,
        top_k=18,
        include_metadata=True,
        include_values=False,
        filter={
            "tags": {"$in": tags}
        }
    )

    fits = []
    for item in results.matches:

        meta = item['metadata']
        fits.append({
            "ID": meta['id'],
            "item": meta['item'],
            "Name": meta['name'],
            "Brand": meta['brand'],
            "Description": meta['description'],
            "tags": meta['tags']
        })

    # construct the Reasoning prompt for LLAMA 3 8b
    fits = recommend_fits(fits, prompt)
    # Fetch the given ID(s) from pinecone
    fits = fetch_fits(fits)

    return fits


@app.post("/api/queryy")
def vectorize_promptt(data: dict):
    prompt = data["prompt"]
    vector = vectorize(prompt)      # Get vector from MarqoFashionCLIP
    fit = gen_fits(prompt)         # Use LLaMA to generate fits
    print(fit)

    final_fit = []
    for i in fit:
        try:
            results = index_w.query(
                vector=vector,
                top_k=1,
                include_metadata=True,
                include_values=False,
                filter={
                    "item": {"$eq": fit[i]["item"]}, 
                    "tags": {"$in": fit[i]['tags']}
                }
            )
            print(fit[i]["item"], fit[i]['tags'], results)
            meta = results.matches[0]['metadata']
        except:
            results = index_w.query(
                vector=vector,
                top_k=1,
                include_metadata=True,
                include_values=False,
                filter={
                    "item": {"$eq": fit[i]["item"]}, 
                }
            )
            meta = results.matches[0]['metadata']
        final_fit.append({
            "item": meta.get("item"),
            "Name": meta.get("name"),
            "Brand": meta.get("brand"),
            "Description": meta.get("description"),
            "tags": meta.get("tags"),
            "image": meta.get("image"),
            "link": meta.get("link"),
            "price": meta.get("price")
        })

    return final_fit


@app.post("/api/queryy_men")
def vectorize_promptt(data: dict):
    prompt = data["prompt"]
    vector = vectorize(prompt)      # Get vector from MarqoFashionCLIP
    fit = gen_fits_men(prompt)         # Use LLaMA to generate fits
    print(fit)

    final_fit = []
    for i in fit:
        try:
            results = index_m.query(
                vector=vector,
                top_k=1,
                include_metadata=True,
                include_values=False,
                filter={
                    "item": {"$eq": fit[i]["item"]}, 
                    "tags": {"$in": fit[i]['tags']}
                }
            )
            print(fit[i]["item"], fit[i]['tags'], results)
            meta = results.matches[0]['metadata']
        except:
            results = index_m.query(
                vector=vector,
                top_k=1,
                include_metadata=True,
                include_values=False,
                filter={
                    "item": {"$eq": fit[i]["item"]}, 
                }
            )
            meta = results.matches[0]['metadata']
        final_fit.append({
            "item": meta.get("item"),
            "Name": meta.get("name"),
            "Brand": meta.get("brand"),
            "Description": meta.get("description"),
            "tags": meta.get("tags"),
            "image": meta.get("image"),
            "link": meta.get("link"),
            "price": meta.get("price")
        })

    return final_fit

# test pinecone without recommendation
@app.post("/api/query_test")
def vectorize_prompt(data: dict):
    prompt = data["prompt"]
    vector = vectorize(prompt)      # Get vector from FashionCLIP
    tags = gen_tags(prompt)         # Use LLaMA or NLP to generate prompt tags
    print(tags)

    # Pinecone query with tag filter
    results = index_w.query(
        vector=vector,
        top_k=18,
        include_metadata=True,
        include_values=False,
        filter={
            "tags": {"$in": tags}
        }
    )
    # print(results)
    fits = []
    for item in results.matches:

        meta = item['metadata']
        fits.append({
            "item": meta.get("item"),
            "Name": meta.get("name"),
            "Brand": meta.get("brand"),
            "Description": meta.get("description"),
            "tags": meta.get("tags"),
            "image": meta.get("image"),
            "link": meta.get("link"),
            "price": meta.get("price")
        })
    # print(results.matches)
    return fits
# uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)