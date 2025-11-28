import React from 'react';
import { Home, CandlestickChart, History, User } from 'lucide-react';

const BottomNav = ({ activeNav, setActiveNav }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-900 z-30">
            <div className="max-w-full md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-2 sm:py-3 md:py-4 flex justify-between md:justify-center md:gap-12 lg:gap-20 items-center">
                <NavItem 
                    icon={Home} 
                    label="Home" 
                    active={activeNav === 'home'} 
                    onClick={() => setActiveNav('home')}
                />
                <NavItem 
                    icon={CandlestickChart} 
                    label="Trade" 
                    active={activeNav === 'trade'} 
                    onClick={() => setActiveNav('trade')}
                />
                <NavItem 
                    icon={History} 
                    label="History" 
                    active={activeNav === 'history'} 
                    onClick={() => setActiveNav('history')}
                />
                <NavItem 
                    icon={User} 
                    label="Profile" 
                    active={activeNav === 'profile'} 
                    onClick={() => setActiveNav('profile')}
                />
            </div>
        </div>
    );
};

const NavItem = ({ icon: Icon, label, active, onClick }) => (
    <button 
        onClick={onClick}
        className={`flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2 transition-colors ${active ? 'text-[#a3e635]' : 'text-zinc-600 hover:text-zinc-400'
        }`}>
        <Icon size={22} strokeWidth={2.5} className="sm:w-6 sm:h-6" />
        <span className="text-[9px] sm:text-[10px] md:text-xs font-medium">{label}</span>
    </button>
);

export default BottomNav;
