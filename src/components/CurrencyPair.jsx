import React from 'react';

const CurrencyPair = ({ flags }) => {
    return (
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
            <img
                src={`https://flagcdn.com/w80/${flags[0].toLowerCase()}.png`}
                alt={flags[0]}
                className="absolute left-0 top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-black z-0 object-cover"
            />
            <img
                src={`https://flagcdn.com/w80/${flags[1].toLowerCase()}.png`}
                alt={flags[1]}
                className="absolute right-0 bottom-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-black z-10 object-cover"
            />
        </div>
    );
};

export default CurrencyPair;
