import React from 'react';
import { Menu, Filter } from 'lucide-react';

const Header = ({ onMenuClick, onFilterClick }) => {
    return (
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 bg-black sticky top-0 z-20">
            <button 
                onClick={onMenuClick}
                className="text-white p-1 hover:bg-zinc-900 rounded-full transition-colors"
            >
                <Menu size={24} strokeWidth={2.5} className="sm:w-7 sm:h-7" />
            </button>
            <button 
                onClick={onFilterClick}
                className="text-white p-1 hover:bg-zinc-900 rounded-full transition-colors"
            >
                <Filter size={20} strokeWidth={0} className="fill-white sm:w-6 sm:h-6" />
            </button>
        </div>
    );
};

export default Header;
