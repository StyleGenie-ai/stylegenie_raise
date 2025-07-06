import ProductCard from "./ProductCard"

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
        {results.map((item) => (
          <ProductCard key={item.ID} item={item} />
        ))}
      </div>
    </div>
  )
}

export default SearchResults
