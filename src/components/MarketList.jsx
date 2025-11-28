import React from 'react';
import MarketItem from './MarketItem';
import { getDataByCategory } from '../data/mockData';

const MarketList = ({ activeTab, filterQuery }) => {
    const marketData = getDataByCategory(activeTab);

    const filteredData = marketData.filter(item => {
        if (!filterQuery) return true;
        const query = filterQuery.toLowerCase();
        return (
            item.pair.toLowerCase().includes(query) || 
            (item.id && item.id.toString().includes(query))
        );
    });

    return (
        <div className="flex flex-col pb-20 sm:pb-24 md:pb-28">
            {filteredData.length > 0 ? (
                filteredData.map((item) => (
                    <MarketItem key={item.id} item={item} />
                ))
            ) : (
                <div className="text-center py-10 text-zinc-500">
                    No results found for "{filterQuery}"
                </div>
            )}
        </div>
    );
};

export default MarketList;
