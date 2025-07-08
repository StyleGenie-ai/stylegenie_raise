"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Loader2, RotateCcw } from "lucide-react"

interface TryOnCardProps {
  isLoading: boolean
  tryOnResult: string | null
  onTryOn: () => void
  onRetry: () => void
}

const TryOnCard = ({ isLoading, tryOnResult, onTryOn, onRetry }: TryOnCardProps) => {
  return (
    <Card className="h-full min-h-[500px] border-2 border-dashed border-purple-300 bg-purple-50/30">
      <CardContent className="p-6 h-full flex flex-col items-center justify-center">
        {!tryOnResult && !isLoading && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
              <Camera className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Try On</h3>
              <p className="text-sm text-purple-700 mb-4">See how this complete look appears on our model</p>
            </div>
            <Button onClick={onTryOn} className="bg-purple-600 hover:bg-purple-700 gap-2">
              <Camera className="h-4 w-4" />
              Try On Look
            </Button>
          </div>
        )}

        {isLoading && (
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-purple-600 mx-auto" />
            <div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Generating...</h3>
              <p className="text-sm text-purple-700">Creating your personalized try-on photo</p>
            </div>
          </div>
        )}

        {tryOnResult && (
          <div className="space-y-4 w-full">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-white">
              <img
                src={tryOnResult || "/placeholder.svg?height=400&width=300"}
                alt="Try-on result"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-purple-900">Your Look</h3>
              <Button
                onClick={onRetry}
                variant="outline"
                size="sm"
                className="gap-2 border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
              >
                <RotateCcw className="h-3 w-3" />
                Try Again
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default TryOnCard
