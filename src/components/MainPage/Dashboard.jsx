import React from 'react';

const Dashboard = ({ stats }) => {
  // Determine if we have active/demo data to show
  const hasData = stats && stats.hasMarketData;

  // Static values for active (present) state vs empty (absent) state
  const portfolioValue = hasData ? '₹ 112,312.24' : '₹ 0.00';
  const btcBalance = hasData ? '22.39401000' : '0.00000000';
  const inrBalance = hasData ? '₹ 1,300.00' : '₹ 0.00';
  
  const currentPrice = hasData ? '₹26,670.25' : '₹0.00';
  const priceChange = hasData ? '0.04%' : '0.00%';

  return (
    <div className="flex flex-col gap-6 animate-fade-in font-sans pb-10">
      
      {/* Top Bar: Portfolio and Balances */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        
        {/* Total Portfolio Value */}
        <div className="flex-1 min-w-[200px]">
          <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
            <span>Total Portfolio Value</span>
            <button className="cursor-pointer focus:outline-none" title="More information">
              <svg className="w-4 h-4 text-gray-400 inline-block align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
              </svg>
            </button>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mt-1.5 tracking-tight">{portfolioValue}</h3>
        </div>

        {/* Divider for larger screens */}
        <div className="hidden lg:block h-12 w-px bg-gray-100" />

        {/* Wallet Balances */}
        <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6 min-w-[300px]">
          <div>
            <span className="text-gray-500 text-sm font-medium">Wallet Balances</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-1.5">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900 tracking-tight">{btcBalance}</span>
                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-sm font-semibold tracking-wider">BTC</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900 tracking-tight">{inrBalance}</span>
                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-sm font-semibold tracking-wider">INR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <button className="flex-1 lg:flex-initial flex items-center justify-center gap-2 bg-[#5F00D9] hover:bg-[#4d00b3] active:scale-98 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>Deposit</span>
          </button>
          <button className="flex-1 lg:flex-initial flex items-center justify-center gap-2 bg-[#5F00D9] hover:bg-[#4d00b3] active:scale-98 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <span>Withdraw</span>
          </button>
        </div>

      </div>

      {/* Main Grid: Left Column (Current Price & Chart), Right Column (Recent Transactions) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Card: Current Price & Chart */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between min-h-[460px]">
          <div>
            {/* Header section with price and Buy/Sell buttons */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="text-gray-500 text-sm font-medium">Current Price</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{currentPrice}</h3>
                  <span className={`${hasData ? 'text-emerald-500' : 'text-gray-400'} font-semibold text-sm flex items-center gap-0.5`}>
                    {hasData && (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    )}
                    <span>{priceChange}</span>
                  </span>
                </div>
              </div>

              {/* Buy/Sell Buttons */}
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 bg-[#5F00D9] hover:bg-[#4d00b3] active:scale-98 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Buy</span>
                </button>
                <button className="flex items-center gap-1.5 bg-[#5F00D9] hover:bg-[#4d00b3] active:scale-98 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Sell</span>
                </button>
              </div>
            </div>

            {/* Time Interval Tabs */}
            <div className="flex justify-end mt-6">
              <div className="flex bg-gray-100 p-0.5 rounded-lg text-xs font-semibold text-gray-500">
                <button className="px-3 py-1.5 rounded-md hover:text-gray-900 cursor-pointer">1H</button>
                <button className="px-3 py-1.5 rounded-md bg-white text-gray-900 shadow-xs cursor-pointer">1D</button>
                <button className="px-3 py-1.5 rounded-md hover:text-gray-900 cursor-pointer">1W</button>
                <button className="px-3 py-1.5 rounded-md hover:text-gray-900 cursor-pointer">1M</button>
              </div>
            </div>

            {/* Chart Area: Conditional Rendering */}
            {hasData ? (
              <div className="relative mt-4">
                <svg className="w-full h-48" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5F00D9" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#5F00D9" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Gradient area under the curve */}
                  <path
                    d="M 0 110 L 15 130 L 30 90 L 45 110 L 60 120 L 75 95 L 90 80 L 105 100 L 120 60 L 135 90 L 150 95 L 165 110 L 180 115 L 195 100 L 210 90 L 225 105 L 240 105 L 255 95 L 270 85 L 285 90 L 300 95 L 315 90 L 330 90 L 345 100 L 360 105 L 375 95 L 390 100 L 405 115 L 420 125 L 435 110 L 450 110 L 465 135 L 480 150 L 495 135 L 510 135 L 525 160 L 540 175 L 555 130 L 570 110 L 585 115 L 600 120 L 600 200 L 0 200 Z"
                    fill="url(#chartGradient)"
                  />
                  {/* Glowing stroke path line */}
                  <path
                    d="M 0 110 L 15 130 L 30 90 L 45 110 L 60 120 L 75 95 L 90 80 L 105 100 L 120 60 L 135 90 L 150 95 L 165 110 L 180 115 L 195 100 L 210 90 L 225 105 L 240 105 L 255 95 L 270 85 L 285 90 L 300 95 L 315 90 L 330 90 L 345 100 L 360 105 L 375 95 L 390 100 L 405 115 L 420 125 L 435 110 L 450 110 L 465 135 L 480 150 L 495 135 L 510 135 L 525 160 L 540 175 L 555 130 L 570 110 L 585 115 L 600 120"
                    fill="none"
                    stroke="#5F00D9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : (
              <div className="h-48 bg-gray-50/50 rounded-xl border border-dashed border-gray-200 flex flex-col items-center justify-center text-center p-6 mt-4">
                <svg className="w-10 h-10 text-gray-300 mb-2.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
                <h5 className="text-sm font-bold text-gray-700">No Market Data Available</h5>
                <p className="text-xs text-gray-400 mt-1 max-w-xs">
                  Activate demo data toggle in the navigation bar to view live pricing graphs and trends.
                </p>
              </div>
            )}
          </div>

          {/* Time Labels */}
          <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
            <span>7:15 PM</span>
            <span>12:55 AM</span>
            <span>6:35 AM</span>
            <span>12:15 PM</span>
            <span>5:55 PM</span>
          </div>
        </div>

        {/* Right Card: Recent Transactions */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between min-h-[460px]">
          <div>
            <h4 className="text-gray-500 text-sm font-semibold mb-4 tracking-wide uppercase">Recent Transactions</h4>
            
            {hasData ? (
              <div className="flex flex-col gap-4">
                {/* Transaction 1 */}
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 font-bold text-lg">
                      <span>₹</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 text-[15px]">INR Deposit</h5>
                      <p className="text-xs text-gray-400 mt-0.5">2022-06-09 7:06 PM</p>
                    </div>
                  </div>
                  <span className="font-bold text-gray-900 text-[15px]">+ ₹81,123.10</span>
                </div>

                <div className="h-px bg-gray-100" />

                {/* Transaction 2 */}
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 font-bold text-lg">
                      <span>B</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 text-[15px]">BTC Sell</h5>
                      <p className="text-xs text-gray-400 mt-0.5">2022-05-27 12:32 PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 text-[15px]">- 12.48513391 BTC</span>
                    <p className="text-xs text-gray-400 mt-0.5">+ $81,123.10</p>
                  </div>
                </div>

                <div className="h-px bg-gray-100" />

                {/* Transaction 3 */}
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 font-bold text-lg">
                      <span>₹</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 text-[15px]">INR Deposit</h5>
                      <p className="text-xs text-gray-400 mt-0.5">2022-06-09 7:06 PM</p>
                    </div>
                  </div>
                  <span className="font-bold text-gray-900 text-[15px]">+ ₹81,123.10</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <h5 className="font-semibold text-gray-700 text-sm">No Transactions Yet</h5>
                <p className="text-xs text-gray-400 mt-1 max-w-[220px]">Your transaction history will be displayed here once you buy or sell crypto.</p>
              </div>
            )}
          </div>

          {/* View All Button */}
          <button className="w-full text-center py-3 mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm transition-all duration-200 cursor-pointer focus:outline-none">
            View All
          </button>
        </div>

      </div>

      {/* Bottom Grid: Loans Card & Contact Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Loans Card */}
        <div className="relative overflow-hidden bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between min-h-[140px] hover:shadow-sm transition-shadow duration-300">
          {/* Subtle Orange Grid Dots Background Pattern on the Right */}
          <svg className="absolute right-0 top-0 h-full w-1/2 text-amber-500/10 pointer-events-none" viewBox="0 0 200 120" fill="currentColor">
            <defs>
              <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="2" />
              </pattern>
            </defs>
            <rect width="200" height="120" fill="url(#dots)" />
          </svg>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <span className="bg-[#5F00D9] text-white px-3 py-1 rounded-full text-xs font-semibold self-start tracking-wide uppercase">
              Loans
            </span>
            <h4 className="text-xl font-bold text-gray-900 leading-snug mt-4 max-w-sm">
              Learn more about Loans – Keep your Bitcoin, access it's value without selling it
            </h4>
          </div>
        </div>

        {/* Contact Card */}
        <div className="relative overflow-hidden bg-[#5F00D9] p-6 rounded-2xl shadow-xs flex flex-col justify-between min-h-[140px] hover:shadow-md transition-shadow duration-300">
          {/* Subtle Grid Squares Background Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 400 120">
            <defs>
              <pattern id="squares" width="24" height="24" patternUnits="userSpaceOnUse">
                <rect width="23" height="23" fill="none" stroke="black" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#squares)" />
          </svg>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <span className="bg-white text-[#5F00D9] px-3 py-1 rounded-full text-xs font-semibold self-start tracking-wide uppercase">
              Contact
            </span>
            <h4 className="text-xl font-bold text-white leading-snug mt-4 max-w-sm">
              Learn more about our real estate, mortgage, and corporate account services
            </h4>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
