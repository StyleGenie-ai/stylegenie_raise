"use client"

import { useState } from "react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SearchBar from "@/components/SearchBar"
import SearchResults from "@/components/SearchResults"
import { Loader2 } from "lucide-react"

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
  const [searchResults, setSearchResults] = useState<FashionItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (query: string) => {
    if (!query.trim()) return

    setIsLoading(true)
    setError(null)
    setHasSearched(true)

    try {
      const response = await fetch("http://127.0.0.1:8000/api/queryy_men", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: query }),
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
        <div className="py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4 animate-fade-in">
              <h1 className="text-2xl md:text-4xl font-playfair font-semibold mb-1">
                Discover Your <span className="text-primary">Perfect Style</span>
              </h1>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Find fashion recommendations tailored to your preferences
              </p>
            </div>

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
            {!isLoading && !error && hasSearched && <SearchResults results={searchResults} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Index
