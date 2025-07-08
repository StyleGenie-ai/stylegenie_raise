"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Heart } from "lucide-react"

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
  compact?: boolean
}

const ProductCard = ({ item, compact = false }: ProductCardProps) => {
  if (compact) {
    return (
      <div className="text-center space-y-2">
        <div className="aspect-square rounded-lg overflow-hidden bg-muted">
          <img
            src={item.image || "/placeholder.svg?height=128&width=128"}
            alt={item.Name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-medium truncate">{item.Name}</p>
          <p className="text-xs text-muted-foreground">${item.price}</p>
        </div>
      </div>
    )
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-0">
        <div className="aspect-square rounded-t-lg overflow-hidden bg-muted relative">
          <img
            src={item.image || "/placeholder.svg?height=300&width=300"}
            alt={item.Name}
            className="h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <Button size="icon" variant="ghost" className="absolute top-2 right-2 bg-background/80 hover:bg-background">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-medium text-sm line-clamp-2">{item.Name}</h3>
            <p className="text-sm text-muted-foreground">{item.Brand}</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold">${item.price}</span>
            <Button size="sm" variant="outline" className="gap-1 bg-transparent">
              <ExternalLink className="h-3 w-3" />
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
