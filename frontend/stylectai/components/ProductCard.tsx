"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Heart } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

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


interface ProductCardProps {
  item: FashionItem
}

const ProductCard = ({ item }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Extract price from description if needed, or use the price field
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price)
  }

  // Clean up description by removing markdown and price info
  const cleanDescription = (desc: string) => {
    return desc
      .replace(/\*\*/g, "") // Remove markdown bold
      .replace(/\$[\d,]+\.?\d*/g, "") // Remove price mentions
      .split(".")[0] // Take first sentence
      .trim()
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden">
        {!imageError ? (
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.Name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Image not available</span>
          </div>
        )}

        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 rounded-full bg-white/80 hover:bg-white"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>

        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="bg-white/90 text-black">
            {item.item}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{item.Brand}</p>
          <h3 className="font-semibold line-clamp-2 leading-tight">{item.Name}</h3>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{cleanDescription(item.Description)}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold">{formatPrice(item.price)}</span>

          <Button
            size="sm"
            variant="outline"
            className="gap-1 bg-transparent"
            onClick={() => window.open(item.link, "_blank")}
          >
            View
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
