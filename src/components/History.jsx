import React from 'react';
import { History as HistoryIcon } from 'lucide-react';

const History = () => {
  return (
    <div className="p-4 md:p-8 text-white min-h-[80vh] flex flex-col items-center justify-center pb-24">
      <div className="bg-zinc-900/50 p-8 rounded-full mb-6">
        <HistoryIcon size={64} className="text-zinc-700" />
      </div>
      <h2 className="text-xl font-semibold mb-2">No History Yet</h2>
      <p className="text-zinc-500 text-center max-w-xs">
        Your trading history will appear here once you start making trades.
      </p>
    </div>
  );
};

export default History;