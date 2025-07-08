import { Filter, X } from "lucide-react";

// Define the prop types for SideBarMobile
interface SideBarMobileProps {
  setActiveGender: (gender: 'man' | 'woman') => void;
  activeGender: 'man' | 'woman';
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const SideBarMobile = ({ setActiveGender, activeGender, sidebarOpen,setSidebarOpen }: SideBarMobileProps) => {

  if (sidebarOpen) {
    return (
     
      <aside className="fixed inset-y-0 left-0 w-full bg-sidebar border-r border-sidebar-border shadow-lg backdrop-blur-md z-50 flex flex-col p-6 transition-all duration-300 md:hidden">
        <div className="flex items-center mb-8 gap-2 justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold text-primary">Filter</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            <X className="h-6 w-6 text-primary" />
          </button>
        </div>
        {/* Gender buttons */}
        <div className="flex gap-3 mb-8">
          <button
            className={`flex-1 px-4 py-2 rounded-lg font-medium border transition-colors duration-200 ${activeGender === 'man' ? 'bg-primary text-white' : 'bg-sidebar-accent text-sidebar-foreground hover:bg-primary/10'}`}
            onClick={() => setActiveGender('man')}
          >
            Man
          </button>
          <button
            className={`flex-1 px-4 py-2 rounded-lg font-medium border transition-colors duration-200 ${activeGender === 'woman' ? 'bg-primary text-white' : 'bg-sidebar-accent text-sidebar-foreground hover:bg-primary/10'}`}
            onClick={() => setActiveGender('woman')}
          >
            Woman
          </button>
        </div>
      </aside>

    )
  }
  return null;
}

export default SideBarMobile;
    

