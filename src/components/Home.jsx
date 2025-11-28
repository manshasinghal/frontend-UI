import React, { useState } from 'react';
import Header from './Header';
import Tabs from './Tabs';
import MarketList from './MarketList';
import { X } from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState("Forex");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFilter = () => {
    setShowFilter(!showFilter);
    if (showFilter) setFilterQuery(""); // Clear filter when closing
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Header onMenuClick={toggleMenu} onFilterClick={toggleFilter} />
      
      {/* Filter Bar */}
      {showFilter && (
        <div className="px-4 py-2 bg-zinc-900 border-b border-zinc-800 animate-in slide-in-from-top-2 duration-200">
          <input 
            type="text" 
            placeholder="Search pairs..." 
            className="w-full bg-black text-white px-4 py-2 rounded-lg border border-zinc-700 focus:outline-none focus:border-zinc-500 placeholder-zinc-600"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            autoFocus
          />
        </div>
      )}

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <MarketList activeTab={activeTab} filterQuery={filterQuery} />

      {/* Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" 
            onClick={toggleMenu}
          ></div>
          
          {/* Drawer Content */}
          <div className="relative w-64 h-full bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col animate-in slide-in-from-left duration-300">
            <button onClick={toggleMenu} className="self-end text-zinc-400 hover:text-white mb-8">
              <X size={24} />
            </button>
            
            <nav className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Menu</span>
                <a href="#" className="text-lg font-medium text-white hover:text-[#a3e635] transition-colors">Dashboard</a>
                <a href="#" className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">Markets</a>
                <a href="#" className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">News</a>
                <a href="#" className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">Analysis</a>
              </div>
              
              <div className="h-px bg-zinc-800"></div>
              
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Account</span>
                <a href="#" className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">Settings</a>
                <a href="#" className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">Help Center</a>
                <a href="#" className="text-lg font-medium text-red-500 hover:text-red-400 transition-colors mt-2">Logout</a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;