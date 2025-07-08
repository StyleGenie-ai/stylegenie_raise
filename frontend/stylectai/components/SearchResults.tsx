import ImageUploading from 'react-images-uploading';

import { Camera, Loader2, X } from "lucide-react"
import ProductCard from "./ProductCard"
import { Button } from "./ui/button"
import React, { useState } from 'react';
import { addPersonalImage } from "@/slices/personalImageSlice";
import { useDispatch, useSelector } from 'react-redux';
import FashionItem from './SingleProduct';

interface SearchResultsProps {
  results: FashionItem[]
}

interface FashionItem {
    ID: string
    item: string
    Name: string
    Brand: string
    Description: string
    tags: string[]
    image: string
    link: string
    price: number
  }

const SearchResults = ({ results }: SearchResultsProps) => {
    
  // const dispatch = useDispatch()
  //   const onChange = (uploadedImage: React.SetStateAction<never[]>) => {
  //     // data for submit
  //     dispatch(addPersonalImage(uploadedImage));
  //     console.log(uploadedImage)
  //     setUploadedImage(uploadedImage);
  //   };
  
  const [isLoading, setIsLoading] = useState(false);
  const [tryonItem, setTryonItem] = React.useState({
              image: '',
              price: 0,
              Name: '',
              ID: '',
              item: '',
              Brand: '',
              Description: '',
              tags: [],
              link: ''
            });
  const gender = useSelector((state) => state.gender.gender);
        console.log(gender)
        const tryOn = async () => {
          setIsLoading(true)

        const male_photo= "https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_748/f_auto,dpr_1.0/252929M193001_1.jpg"
        const female_photo= "https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_748/f_auto,dpr_1.0/251020F511010_1.jpg"
        const human_img = (gender == "women") ? female_photo : male_photo
          try {
            const response = await fetch("http://127.0.0.1:8000/api/try_on", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ human_img: human_img, garms: results }),
            })
      
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
      
            const data = await response.json()
            const tryOnItem : FashionItem = {
              image: data.image,
              price: data.price,
              Name: '',
              ID: '',
              item: '',
              Brand: '',
              Description: '',
              tags: [],
              link: ''
            };
            setTryonItem(tryOnItem)
          } catch (err) {
            setIsLoading(false)
            console.error("Search error:", err)
          } finally {
            setIsLoading(false)
          }
        
    }
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-2">No results found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search terms or browse our collection with different keywords.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Found {results.length} {results.length === 1 ? "item" : "items"}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2 text-muted-foreground">Generating tryon photo...</span>
              </div>
          )}
          {!isLoading && (tryonItem.image =="" ? <Button
            size="sm"
            variant="outline"
            className="gap-1 bg-transparent"
            onClick={() => tryOn() }
          >
            View the look on our model
          </Button> :
          <ProductCard item={tryonItem} />)}
        {results.map((item) => (
          <ProductCard key={item.ID} item={item} />
        ))}
      </div>
    </div>
  )
}

export default SearchResults
