import React from 'react';
import CurrencyPair from './CurrencyPair';

const MarketItem = ({ item }) => {
    // Helper function to split price for partial coloring
    const splitPrice = (price) => {
        const priceStr = price.toString();
        const dotIndex = priceStr.indexOf('.');

        if (dotIndex === -1) {
            // No decimal point, color last digit
            return {
                normal: priceStr.slice(0, -1),
                colored: priceStr.slice(-1)
            };
        }

        // Color last digit before decimal + all decimal digits
        return {
            normal: priceStr.slice(0, dotIndex - 1),
            colored: priceStr.slice(dotIndex - 1)
        };
    };

    const bidPriceSplit = splitPrice(item.bidPrice);
    const askPriceSplit = splitPrice(item.askPrice);

    // Determine bid color class
    const getBidColorClass = () => {
        if (item.bidIsRed) return 'text-[#dc2626]';
        if (item.bidIsGreen) return 'text-[#16a34a]';
        return 'text-white';
    };

    // Determine ask color class
    const getAskColorClass = () => {
        if (item.askIsRed) return 'text-[#dc2626]';
        if (item.askIsGreen) return 'text-[#16a34a]';
        return 'text-white';
    };

    return (
        <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_auto] gap-2 sm:gap-3 md:gap-6 lg:gap-8 items-center py-2 sm:py-3 md:py-4 border-b border-zinc-900 px-3 sm:px-4 md:px-8 lg:px-12 hover:bg-zinc-900/30 transition-colors cursor-pointer">
            {/* Left Section - Flags + Info */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <CurrencyPair flags={item.flags} />
                <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] sm:text-[10px] md:text-xs text-zinc-500 font-medium tracking-wide">
                        {item.time}
                    </span>
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-white leading-tight">
                        {item.pair}
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm text-[#16a34a] font-medium">
                        {item.changeValue} <span className="text-zinc-600">({item.changePercent})</span>
                    </span>
                </div>
            </div>

            {/* Mobile: Combined Bid/Ask */}
            <div className="md:hidden flex gap-3 sm:gap-4 justify-end col-span-2">
                <div className="flex flex-col items-end gap-0.5">
                    <span className="text-sm sm:text-base font-medium tracking-tight">
                        <span className="text-white">{bidPriceSplit.normal}</span>
                        <span className={getBidColorClass()}>
                            {bidPriceSplit.colored}
                        </span>
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-500">L:{item.lowPrice}</span>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                    <span className="text-sm sm:text-base font-medium tracking-tight">
                        <span className="text-white">{askPriceSplit.normal}</span>
                        <span className={getAskColorClass()}>
                            {askPriceSplit.colored}
                        </span>
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-500">H:{item.highPrice}</span>
                </div>
            </div>

            {/* Desktop: Separate columns for Bid */}
            <div className="hidden md:flex flex-col items-end gap-0.5">
                <span className="text-base lg:text-lg font-medium tracking-tight">
                    <span className="text-white">{bidPriceSplit.normal}</span>
                    <span className={getBidColorClass()}>
                        {bidPriceSplit.colored}
                    </span>
                </span>
                <span className="text-xs text-zinc-500">L:{item.lowPrice}</span>
            </div>

            {/* Desktop: Separate columns for Ask */}
            <div className="hidden md:flex flex-col items-end gap-0.5">
                <span className="text-base lg:text-lg font-medium tracking-tight">
                    <span className="text-white">{askPriceSplit.normal}</span>
                    <span className={getAskColorClass()}>
                        {askPriceSplit.colored}
                    </span>
                </span>
                <span className="text-xs text-zinc-500">H:{item.highPrice}</span>
            </div>
        </div>
    );
};

export default MarketItem;
