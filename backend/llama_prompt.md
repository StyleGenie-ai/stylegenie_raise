**Input:**

* `user_prompt`: A string containing the user's fashion query or need (e.g. "I want a dress for a summer wedding")
* `products`: A list of dictionaries, each containing information about a product (e.g. dress, top, pants, etc.)
  + Each product has the following structure:

  ```json
  {
    "ID": "string",             // Unique identifier of the product
    "item": "string",           // Type of product (e.g. dress, top, pants)
    "Name": "string",           // Name of the product
    "Brand": "string",          // Brand of the product
    "Description": "string",    // A detailed description of the product
    "tags": ["string", ...]     // A list of descriptive tags for the product
  }
  ```

**Task:**

Recommend the top 6 products that are most compatible with the user's needs based on the user's prompt and the information in the products list.

**Output:**

A list of the top 6 recommended products, with the following information for each product:

* `ID`: The id of the product

**Example Input:**

```json
{
    "user_prompt": "going to a wedding by the beach, need a dress that’s flowy and not too formal",
    "products": [
    {
        "ID": "5bdd55c8-ed6d-4cc0-9a8d-b6621e234b81",
        "item": "Dress",
        "Name": "Black Slinky Gabe Midi Dress",
        "Brand": "HIGH SPORT",
        "Description": "**Command attention in the HIGH SPORT Black Slinky Gabe Midi Dress. This luxurious slinky....",
        "tags": ["dress", "....."]
    },
    {
        "ID": "20ed4f2e-0a49-43c8-b306-7705715501b9",
        "item": "Shirt",
        "Name": "Black Embellished Metal Shirt",
        "Brand": "LEMAIRE",
        "Description": "**Option 1 (Concise & Edgy):**\n\nLEMAIRE Black Embellished Metal Shirt. Effortless cool....",
        "tags": ["effortless","shirt effortless","elevate","night","concise",]
    },
    {
        "ID": "939a7dc7-e4d9-4093-ab70-0cdc411732dc",
        "item": "T-shirt",
        "Name": "White Chouchou T-shirt",
        "Brand": "SANDY LIANG",
        "Description": "**Option 1 (Focus on simplicity and luxury):**\n\nEffortless cool, elevated....",
        "tags": ["brand","style","subtle details","shirt",]
    },
    {
        "ID": "7b91fca5-ab0d-4884-b2f5-99bdcacb1f9c",
        "item": "Minidress",
        "Name": "Blue Knitted Shift Minidress",
        "Brand": "JW ANDERSON",
        "Description": "Effortlessly chic: the JW Anderson Blue Knitted Shift Minidress....",
        "tags": ["fashion","effortless","fashion jw","high","high fashion",]
    },
    {....}
    ]
}
```

**Example Output:**

```json
{
   "recommended_products": [
      "62808253-5515-4b48-a206-4ed89e8fa54e",
      "eef27db6-7c3b-4486-a7b9-24f57f74a845",
      "9614b158-0a71-4578-9cae-5438c7e33548",
      "b33146e0-562a-4bcc-9cd7-46bb48a6cae0",
      "82ea500b-7000-41dd-93b0-2d41b1cacec2",
      "cbe8a6eb-9d6d-48cd-9f7f-3d3f4a7a0f2a"
   ]
}
```

This output indicates that the Llama3 model has analyzed the user's prompt and the information about the products, and has determined that the top 6 most compatible products are the summer dresses and other products that are suitable for casual occasions or have some features that match the user's needs but are not as closely matched as the dresses are.
You are expected to reason carefully and base your picks on how well the product's content matches the prompt, style, season, occasion, tone, and intent.