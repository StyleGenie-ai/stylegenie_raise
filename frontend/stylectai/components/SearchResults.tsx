"use client"

import { useState } from "react"
import { Camera, Loader2, Plus } from "lucide-react"
import ProductCard from "./ProductCard"
import { Button } from "./ui/button"

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

interface SearchResultsProps {
  results: FashionItem[]
  selectedGender: "women" | "men"
}

interface TryOnCardProps {
  isLoading: boolean
  tryOnResult: string | null
  onTryOn: () => void
  onRetry: () => void
}

const TryOnCard = ({ isLoading, tryOnResult, onTryOn, onRetry }: TryOnCardProps) => {
  return (
    <div className="bg-card rounded-lg border p-6 flex flex-col items-center justify-center">
      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2 text-muted-foreground">Generating your try-on photo...</span>
        </div>
      )}

      {!isLoading && !tryOnResult && (
        <>
          <h3 className="text-lg font-medium mb-4 text-center">Try On Your Look</h3>
          <Button onClick={onTryOn} className="gap-2" size="lg">
            <Camera className="h-4 w-4" />
            Try On
          </Button>
        </>
      )}

      {tryOnResult && (
        <div className="space-y-4">
          <h4 className="text-lg font-medium">Your Try-On Result</h4>
          <div className="max-w-sm mx-auto">
            <img
              src={tryOnResult || "/placeholder.svg"}
              alt="Try-on result"
              className="w-full h-auto rounded-lg border"
            />
          </div>
          <Button onClick={onRetry} variant="outline" size="sm">
            Try Again
          </Button>
        </div>
      )}
    </div>
  )
}

const SearchResults = ({ results, selectedGender }: SearchResultsProps) => {
  const [isLoadingTryOn, setIsLoadingTryOn] = useState(false)
  const [tryOnResult, setTryOnResult] = useState<string | null>(null)

  const tryOn = async () => {
    setIsLoadingTryOn(true)

    const male_photo =
      "https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_748/f_auto,dpr_1.0/252929M193001_1.jpg"
    const female_photo =
      "https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_748/f_auto,dpr_1.0/251020F511010_1.jpg"
    const human_img = selectedGender === "women" ? female_photo : male_photo

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
      setTryOnResult(data.image)
    } catch (err) {
      console.error("Try-on error:", err)
    } finally {
      setIsLoadingTryOn(false)
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
    <div className="space-y-8">
      {/* Results Header */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Your Complete Look</h2>
        <p className="text-muted-foreground">
          Found {results.length} {results.length === 1 ? "item" : "items"} for the perfect outfit
        </p>
      </div>

      {/* Horizontal Layout: Product + Product = Try-On */}
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {/* Product Cards */}
        {results.map((item, index) => (
          <div key={item.ID} className="flex items-center">
            <div className="w-57">
              <ProductCard item={item} />
            </div>
            {index < results.length - 1 && (
              <div className="mx-4">
                <Plus className="h-8 w-8 text-purple-600 font-bold" />
              </div>
            )}
          </div>
        ))}

        {/* Equals Sign */}
        <div className="mx-4">
          <div className="text-3xl font-bold text-purple-600">=</div>
        </div>

        {/* Try-On Card */}
        <div className="w-80">
          <TryOnCard
            isLoading={isLoadingTryOn}
            tryOnResult={tryOnResult}
            onTryOn={tryOn}
            onRetry={() => {
              setTryOnResult(null)
              tryOn()
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchResults
