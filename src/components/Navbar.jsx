import React from 'react';

const Navbar = ({ title, useDemoData, onToggleDemoData }) => {
  return (
    <header className="h-16 min-h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 select-none font-sans">
      {/* Title section with smooth transition for changes */}
      <h1 className="text-xl font-semibold text-gray-800 tracking-tight transition-all duration-300">
        {title}
      </h1>

      {/* Control and User profile avatar section */}
      <div className="flex items-center gap-4">
        {/* Toggle Demo Data Control */}
        <button
          onClick={onToggleDemoData}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#5F00D9]/30 bg-gray-50/50 hover:bg-[#5F00D9]/5 transition-all duration-200 cursor-pointer focus:outline-none"
          title="Toggle between mock demo data and empty states"
        >
          {/* Track */}
          <div
            className={`w-7 h-4 rounded-full p-0.5 transition-colors duration-200 ${
              useDemoData ? 'bg-[#5F00D9]' : 'bg-gray-300'
            }`}
          >
            {/* Thumb */}
            <div
              className={`w-3 h-3 rounded-full bg-white transition-transform duration-200 transform ${
                useDemoData ? 'translate-x-3' : 'translate-x-0'
              }`}
            />
          </div>
          <span className="text-xs font-semibold text-gray-600">Demo Data</span>
        </button>

        {/* User avatar */}
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-900 hover:bg-gray-50 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5F00D9]/20"
          aria-label="User Profile"
        >
          {/* User outline silhouette icon */}
          <svg
            className="w-5 h-5 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
