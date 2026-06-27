import React from 'react';

const Sidebar = ({ activeItem = 'dashboard', onItemSelect }) => {
  // Navigation items configuration
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (isActive) => (
        <svg
          className={`w-5 h-5 transition-all duration-300 ease-out ${
            isActive
              ? 'scale-110 text-[#5F00D9] rotate-0 group-hover:rotate-12 group-hover:scale-120'
              : 'text-gray-400 group-hover:text-gray-800 group-hover:scale-115 group-hover:-translate-y-[1px]'
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      ),
    },
    {
      id: 'transactions',
      label: 'Transactions',
      icon: (isActive) => (
        <svg
          className={`w-5 h-5 transition-all duration-300 ease-out ${
            isActive
              ? 'scale-110 text-[#5F00D9] group-hover:scale-120'
              : 'text-gray-400 group-hover:text-gray-800 group-hover:scale-115'
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          {/* Arrow Up-Right */}
          <path
            d="M17 7L7 17"
            className={`transition-transform duration-300 ${
              isActive ? 'translate-x-0.5 -translate-y-0.5' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
            }`}
          />
          <path d="M17 7H10" />
          <path d="M17 7V14" />
          {/* Arrow Down-Left */}
          <path
            d="M7 17H14"
            className={`transition-transform duration-300 ${
              isActive ? '-translate-x-0.5 translate-y-0.5' : 'group-hover:-translate-x-0.5 group-hover:translate-y-0.5'
            }`}
          />
          <path d="M7 17V10" />
        </svg>
      ),
    },
  ];

  const supportItem = {
    id: 'support',
    label: 'Support',
    icon: (isActive) => (
      <svg
        className={`w-5 h-5 transition-all duration-300 ease-out ${
          isActive
            ? 'scale-110 text-[#5F00D9] group-hover:rotate-12 group-hover:scale-120'
            : 'text-gray-400 group-hover:text-gray-800 group-hover:scale-115 group-hover:-translate-y-[2px]'
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  };

  const handleItemClick = (id) => {
    if (onItemSelect) {
      onItemSelect(id);
    }
  };

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col justify-between py-6 px-4 font-sans select-none shadow-sm">
      {/* Top Section */}
      <div className="flex flex-col gap-6">
        {/* Brand Logo */}
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold tracking-wider text-[#5F00D9]">
            Crypto-Gram
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`group relative flex items-center gap-4 pl-5 pr-4 py-3 rounded-xl transition-all duration-300 text-left font-medium cursor-pointer active:scale-[0.97] origin-center ${
                  isActive
                    ? 'bg-[#F3F4F6] text-[#5F00D9] shadow-sm translate-x-1'
                    : 'text-gray-500 hover:bg-gray-50/80 hover:text-gray-900 hover:translate-x-0.5'
                }`}
              >
                {/* Active Indicator Bar */}
                <span
                  className={`absolute left-0 top-3 bottom-3 w-[3px] bg-[#5F00D9] rounded-r-full transition-all duration-300 origin-left ${
                    isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 group-hover:scale-y-50 group-hover:opacity-50'
                  }`}
                />

                <span className="flex items-center justify-center">
                  {item.icon(isActive)}
                </span>
                <span className="text-[15px]">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4">
        {/* Divider */}
        <div className="h-px bg-gray-100 w-full" />

        {/* Support Link */}
        <button
          onClick={() => handleItemClick(supportItem.id)}
          className={`group relative flex items-center gap-4 pl-5 pr-4 py-3 rounded-xl transition-all duration-300 text-left font-medium cursor-pointer active:scale-[0.97] origin-center ${
            activeItem === supportItem.id
              ? 'bg-[#F3F4F6] text-[#5F00D9] shadow-sm translate-x-1'
              : 'text-gray-500 hover:bg-gray-50/80 hover:text-gray-900 hover:translate-x-0.5'
          }`}
        >
          {/* Active Indicator Bar */}
          <span
            className={`absolute left-0 top-3 bottom-3 w-[3px] bg-[#5F00D9] rounded-r-full transition-all duration-300 origin-left ${
              activeItem === supportItem.id ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 group-hover:scale-y-50 group-hover:opacity-50'
            }`}
          />

          <span className="flex items-center justify-center">
            {supportItem.icon(activeItem === supportItem.id)}
          </span>
          <span className="text-[15px]">{supportItem.label}</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
