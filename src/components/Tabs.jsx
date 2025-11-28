import React from 'react';

const tabs = [
    "Favourites",
    "Forex",
    "Crypto",
    "Indices",
    "Derivatives",
    "Commodities",
    "Stocks",
    "ETFs",
    "Options",
    "Futures"
];

const Tabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="bg-black py-2 sm:py-3 md:py-4">
            {/* Tabs */}
            <div className="flex items-center justify-start md:justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 overflow-x-auto w-full no-scrollbar scroll-smooth">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-xs sm:text-sm md:text-base font-medium whitespace-nowrap flex-shrink-0 transition-colors ${activeTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
