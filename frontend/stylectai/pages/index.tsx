import { useState } from "react";
import Footer from "@/components/Footer";
// import ImageUpload from "@/components/ImageUpload";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Newsletter from "@/components/NewsLetter";
import RecommendButton from "@/components/RecommendationBtn";
import FashionRecommendations from "@/components/RecommendationList";

import SideBar from "@/components/Sidebar";
import SideBarMobile from "@/components/MobileSideBar";

const Index = () => {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeGender, setActiveGender] = useState<'man' | 'woman'>('man');

  const handleGetRecommendations = () => {
    setShowRecommendations(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sidebar */}
   

    
      <div className="flex-1 flex flex-col min-h-screen relative">
        <Navbar />
        {/* Absolutely positioned sidebar for desktop */}
        <div className="hidden md:block">
          <div className="absolute top-0 left-0 h-full">
            <SideBar activeGender={activeGender} setActiveGender={setActiveGender} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
          </div>
        </div>

          <button
              className="fixed top-4 right-4 z-50 md:hidden bg-primary text-white p-2 rounded-lg shadow-lg focus:outline-none"
               onClick={() => setSidebarOpen(!sidebarOpen)}
                     aria-label="Toggle sidebar"
          >
              {sidebarOpen ? (
                  <span>&#10005;</span>
               ) : (
                 <span>&#9776;</span>
               )}
          </button>
          <SideBarMobile setSidebarOpen={setSidebarOpen} setActiveGender={setActiveGender} activeGender={activeGender} sidebarOpen={sidebarOpen}/>
        <main className="flex-grow">
          <div className="py-4 px-4">
            <div className="max-w-7xl mx-auto mt-12">
              <div className="text-center mb-4 animate-fade-in">
                <h1 className="text-2xl md:text-4xl font-playfair font-semibold mb-1">
                  Discover Your <span className="text-primary">Perfect Style</span>
                </h1>
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  Find fashion recommendations tailored to your preferences
                </p>
              </div>
              <div className="max-w-4xl mx-auto mb-2">
                <SearchBar onSearch={() => {}} />
              {/*   <ImageUpload /> */}
                <RecommendButton onClick={handleGetRecommendations} />
              </div>
              {showRecommendations && <FashionRecommendations />}
            </div>
          </div>
        </main>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Index;