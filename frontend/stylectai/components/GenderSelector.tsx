"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { User, UserCheck, Venus, Mars } from "lucide-react"

interface GenderSelectorProps {
  selectedGender: "women" | "men"
  onGenderChange: (gender: "women" | "men") => void
}

const GenderSelector = ({ selectedGender, onGenderChange }: GenderSelectorProps) => {
  return (
    <div className="inline-flex items-center justify-center rounded-xl bg-muted/30 p-1 border">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-6 py-3 text-sm font-medium transition-all rounded-lg flex items-center gap-2",
          selectedGender === "women"
            ? "bg-primary text-white shadow-md hover:bg-purple-700"
            : "text-muted-foreground/60 hover:text-muted-foreground hover:bg-muted/50",
        )}
        onClick={() => onGenderChange("women")}
      >
        <Venus className="h-4 w-4" />
        Women
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-6 py-3 text-sm font-medium transition-all rounded-lg flex items-center gap-2",
          selectedGender === "men"
            ? "bg-primary text-white shadow-md hover:bg-purple-700"
            : "text-muted-foreground/60 hover:text-muted-foreground hover:bg-muted/50",
        )}
        onClick={() => onGenderChange("men")}
      >
        <Mars className="h-4 w-4" />
        Men
      </Button>
    </div>
  )
}

export default GenderSelector
