
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

const Index = () => {
  
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
            
            <div className="max-w-4xl mx-auto mb-2">
              <SearchBar />
            </div>
            
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;