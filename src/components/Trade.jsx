import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { userProfile } from '../data/mockData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Trade = () => {
  // Mock data for the chart
  const chartData = {
    labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40', '10:45', '10:50', '10:55'],
    datasets: [
      {
        label: 'Price',
        data: [1.0840, 1.0842, 1.0838, 1.0845, 1.0848, 1.0844, 1.0850, 1.0852, 1.0849, 1.0855, 1.0858, 1.0860],
        borderColor: '#16a34a', // Green color
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(22, 163, 74, 0.5)');
          gradient.addColorStop(1, 'rgba(22, 163, 74, 0.0)');
          return gradient;
        },
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#18181b',
        titleColor: '#a1a1aa',
        bodyColor: '#ffffff',
        borderColor: '#27272a',
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: (context) => `Price: ${context.parsed.y.toFixed(4)}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#71717a',
          font: {
            size: 10,
          },
          maxTicksLimit: 6,
        },
      },
      y: {
        position: 'right',
        grid: {
          color: '#27272a',
          drawBorder: false,
        },
        ticks: {
          color: '#71717a',
          font: {
            size: 10,
          },
          callback: (value) => value.toFixed(4),
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };

  return (
    <div className="p-4 md:p-8 text-white pb-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">EUR/USD</h2>
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">1H</span>
          <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">4H</span>
          <span className="px-2 py-1 bg-zinc-700 text-white rounded text-xs">1D</span>
          <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">1W</span>
        </div>
      </div>
      
      {/* Chart Container */}
      <div className="bg-zinc-900 rounded-xl p-4 mb-6 h-72 border border-zinc-800 w-full">
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Trading Controls */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg flex flex-col items-center transition-colors">
          <span className="flex items-center gap-1"><ArrowDown size={20} /> SELL</span>
          <span className="text-sm font-normal opacity-80">1.0845</span>
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg flex flex-col items-center transition-colors">
          <span className="flex items-center gap-1"><ArrowUp size={20} /> BUY</span>
          <span className="text-sm font-normal opacity-80">1.0848</span>
        </button>
      </div>

      {/* Trade Details */}
      <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
        <div className="flex justify-between py-3 border-b border-zinc-800">
          <span className="text-zinc-400">Balance</span>
          <span className="font-medium">{userProfile.balance}</span>
        </div>
        <div className="flex justify-between py-3 border-b border-zinc-800">
          <span className="text-zinc-400">Equity</span>
          <span className="font-medium">{userProfile.equity}</span>
        </div>
        <div className="flex justify-between py-3">
          <span className="text-zinc-400">Free Margin</span>
          <span className="font-medium">{userProfile.margin}</span>
        </div>
      </div>
    </div>
  );
};

export default Trade;