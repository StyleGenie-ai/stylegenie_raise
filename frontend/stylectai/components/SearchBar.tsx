import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Camera, Mic, Search, X, } from "lucide-react"

import ImageUploading from 'react-images-uploading';

interface SearchBarProps {
  onSearch: (query: string, image: any) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("")
  const [uploadedImage, setUploadedImage] = useState([]);
  const onImageChange = (uploadedImage: React.SetStateAction<never[]>) => {
    // data for submit
    setUploadedImage(uploadedImage);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query, uploadedImage)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search for fashion items, brands, or styles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 h-12 text-base"
        />
      </div>
      <ImageUploading
          multiple
          value={uploadedImage}
          onChange={onImageChange}
          maxNumber={1}
          dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className={`upload-zone py-2 ${isDragging ? 'border-primary bg-secondary' : ''}`}>
            <div className="flex items-center gap-3">
              <button
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}>
                    <Camera/>
              </button>
            </div>
            {imageList.map((image, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden border">
                <img src={image['data_url']} alt="" width="100" className="w-full object-cover h-16"/>
                <div className="image-item__btn-wrapper">
                  <Button variant="destructive"
                      size="icon"
                      className="absolute top-1 right-1 h-5 w-5 rounded-full shadow-md"
                      onClick={() => onImageRemove(index)}><X className="h-2.5 w-2.5" /></Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <div className="flex items-center gap-3 upload-zone py-2"><Mic /></div>
      <Button type="submit" size="lg" className="h-12 px-8">
        Search
      </Button>
    </form>
  )
}

export default SearchBar