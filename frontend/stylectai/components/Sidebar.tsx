import { Filter, X } from "lucide-react";

// Define the prop types for SideBar
interface SideBarProps {
  setActiveGender: (gender: 'man' | 'woman') => void;
  activeGender: 'man' | 'woman';
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const SideBar = ({ setActiveGender, activeGender, setSidebarOpen, sidebarOpen }: SideBarProps) => {
  if (!sidebarOpen) {
    // Show a small toggle button when sidebar is closed
    return (
      <button
        className="fixed top-1/2 left-0 z-50 transform -translate-y-1/2 bg-primary text-white p-2 rounded-r-lg shadow-lg hover:bg-primary/90 transition-colors duration-200 md:block hidden"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Filter className="h-6 w-6" />
      </button>
    );
  }

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-sidebar border-r border-sidebar-border shadow-lg backdrop-blur-md z-50 flex flex-col p-6 transition-all duration-300 md:block hidden">
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
  );
};

export default SideBar;