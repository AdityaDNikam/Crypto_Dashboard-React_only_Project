import React from 'react';

const Dashboard = ({ stats }) => {
  // Graceful defaults if stats are not provided
  const {
    portfolioValue = '$0.00',
    portfolioChange = 'No performance data',
    walletBalance = '0.000 BTC',
    btcUsdValue = '≈ $0.00 USD',
    activeTrades = '0',
    hasMarketData = false,
  } = stats || {};

  const isPositiveChange = portfolioChange.startsWith('+');

  return (
    <div className="flex flex-col gap-6 animate-fade-in font-sans">
      {/* Welcome header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome to Crypto-Gram</h2>
        <p className="text-gray-500 text-sm mt-1">Here is your portfolio overview and recent market activity.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Total Portfolio Value */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-40 hover:shadow-md transition-shadow duration-300">
          <div>
            <span className="text-gray-400 text-sm font-medium">Total Portfolio Value</span>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-2">{portfolioValue}</h3>
          </div>
          <div
            className={`flex items-center gap-2 font-semibold text-sm ${
              isPositiveChange ? 'text-emerald-600' : 'text-gray-400'
            }`}
          >
            {isPositiveChange && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            )}
            <span>{portfolioChange}</span>
          </div>
        </div>

        {/* Card 2: Wallet Balance */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-40 hover:shadow-md transition-shadow duration-300">
          <div>
            <span className="text-gray-400 text-sm font-medium">Wallet Balance</span>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-2">{walletBalance}</h3>
          </div>
          <span className="text-gray-500 text-xs font-medium">{btcUsdValue}</span>
        </div>

        {/* Card 3: Active Trades */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-40 hover:shadow-md transition-shadow duration-300">
          <div>
            <span className="text-gray-400 text-sm font-medium">Active Trades</span>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-2">{activeTrades}</h3>
          </div>
          <span className="text-[#5F00D9] text-xs font-semibold hover:underline cursor-pointer">
            View active orders →
          </span>
        </div>
      </div>

      {/* Market insights chart container with conditional empty state rendering */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-bold text-gray-900">Market Performance</h4>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs font-semibold text-white bg-[#5F00D9] rounded-lg cursor-pointer">1D</button>
            <button className="px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">1W</button>
            <button className="px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">1M</button>
          </div>
        </div>

        {hasMarketData ? (
          /* Active Market Data Chart Mockup */
          <div className="h-64 bg-gray-50/30 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-gray-400 relative overflow-hidden">
            {/* Draw a subtle grid & graph path in the background to look like a premium chart */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-50">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="border-b border-r border-gray-100/70" />
              ))}
            </div>
            {/* Wave shape simulating line chart */}
            <svg className="absolute inset-0 w-full h-full text-[#5F00D9]/10" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path
                d="M 0 80 Q 20 40 40 60 T 80 20 T 100 30 L 100 100 L 0 100 Z"
                fill="currentColor"
              />
              <path
                d="M 0 80 Q 20 40 40 60 T 80 20 T 100 30"
                fill="none"
                stroke="#5F00D9"
                strokeWidth="2"
              />
            </svg>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping mb-2" />
              <span className="text-sm font-semibold text-gray-700">Live charts updated 2m ago</span>
              <span className="text-xs text-gray-400 mt-1">Simulated WebSockets Connection Active</span>
            </div>
          </div>
        ) : (
          /* Empty Market State */
          <div className="h-64 bg-gray-50/50 rounded-xl border border-dashed border-gray-200 flex flex-col items-center justify-center text-center p-6">
            <svg
              className="w-12 h-12 mb-3 text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
            <h5 className="text-sm font-bold text-gray-700">No Market Data Available</h5>
            <p className="text-xs text-gray-400 mt-1 max-w-xs">
              Disable empty state or trigger a deposit simulation to view live pricing graphs and index activity.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
