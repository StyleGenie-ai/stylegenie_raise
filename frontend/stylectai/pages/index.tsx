"use client"

import { useState } from "react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SearchBar from "@/components/SearchBar"
import SearchResults from "@/components/SearchResults"
import GenderSelector from "@/components/GenderSelector"
import { Loader2 } from "lucide-react"
import { useDispatch } from "react-redux"
import { changeGender } from "@/slices/genderSlice"

export interface FashionItem {
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

const Index = () => {
  const dispatch = useDispatch()
  const [searchResults, setSearchResults] = useState<FashionItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [selectedGender, setSelectedGender] = useState<"women" | "men">("women")

  const handleGenderChange = (gender: "women" | "men") => {
    setSelectedGender(gender)
    dispatch(changeGender(gender))
  }

  const handleSearch = async (query: string, image: any) => {
    if (!query.trim()) return

    const url = "http://127.0.0.1:8000/api/query_prompt"
    setIsLoading(true)
    setError(null)
    setHasSearched(true)

    try {
      console.log(image)
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: query, gender: selectedGender, image: image }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: FashionItem[] = await response.json()
      setSearchResults(data)
    } catch (err) {
      setError("Failed to fetch search results. Please try again.")
      console.error("Search error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <div className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-playfair font-semibold mb-3">
                Discover Your <span className="text-primary">Perfect Style</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Find fashion recommendations tailored to your preferences
              </p>

              {/* Gender Selection */}
              <div className="mb-6">
                <GenderSelector selectedGender={selectedGender} onGenderChange={handleGenderChange} />
              </div>
            </div>

            {/* Search Section */}
            <div className="max-w-4xl mx-auto mb-8">
              <SearchBar onSearch={handleSearch} />
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2 text-muted-foreground">Searching for your perfect style...</span>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-center py-12">
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-destructive font-medium">{error}</p>
                </div>
              </div>
            )}

            {/* Search Results */}
            {!isLoading && !error && hasSearched && (
              <SearchResults results={searchResults} selectedGender={selectedGender} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Index
