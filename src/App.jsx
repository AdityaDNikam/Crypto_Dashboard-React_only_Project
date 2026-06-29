import React, { useState } from 'react';
import { Routes, Route, Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/MainPage/Dashboard';
import Transactions from './components/PortfolioPage/Transactions';
import Support from './components/ConatctUspage/Support';

// Mock data objects to pass down as props
const demoStats = {
  portfolioValue: '$48,259.50',
  portfolioChange: '+8.2% this month',
  walletBalance: '1.824 BTC',
  btcUsdValue: '≈ $29,150.20 USD',
  activeTrades: '12',
  hasMarketData: true,
};

const emptyStats = {
  portfolioValue: '$0.00',
  portfolioChange: 'No performance data',
  walletBalance: '0.000 BTC',
  btcUsdValue: '≈ $0.00 USD',
  activeTrades: '0',
  hasMarketData: false,
};

const demoTransactions = [
  { id: 'TX-1002', type: 'Buy BTC', date: '2026-06-29 14:32', amount: '+0.045 BTC', value: '$2,700.00', status: 'Completed' },
  { id: 'TX-1001', type: 'Sell ETH', date: '2026-06-28 09:15', amount: '-1.200 ETH', value: '$2,400.00', status: 'Completed' },
  { id: 'TX-1000', type: 'Deposit USD', date: '2026-06-27 18:40', amount: '+$5,000.00', value: '$5,000.00', status: 'Completed' },
  { id: 'TX-0999', type: 'Withdraw USD', date: '2026-06-25 11:02', amount: '-$1,200.00', value: '$1,200.00', status: 'Processing' },
  { id: 'TX-0998', type: 'Buy ADA', date: '2026-06-24 16:11', amount: '+450.0 ADA', value: '$180.00', status: 'Failed' },
];

const demoTickets = [
  { id: 'TCK-204', subject: 'Delayed Bitcoin Deposit', date: '2026-06-29 11:00', status: 'Open' },
  { id: 'TCK-198', subject: 'KYC Verification Pending', date: '2026-06-28 15:45', status: 'Closed' },
];

function AppLayout({ useDemoData, setUseDemoData }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Map route pathnames to active sidebar items
  const pathToId = {
    '/': 'dashboard',
    '/transactions': 'transactions',
    '/support': 'support',
  };
  const activeItem = pathToId[location.pathname] || 'dashboard';

  // Map route pathnames to navbar header title
  const pageTitles = {
    '/': 'Dashboard',
    '/transactions': 'Transactions',
    '/support': 'Support',
  };
  const currentTitle = pageTitles[location.pathname] || 'Dashboard';

  const handleItemSelect = (id) => {
    if (id === 'dashboard') {
      navigate('/');
    } else {
      navigate(`/${id}`);
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50/50">
      {/* Left panel: Sidebar */}
      <Sidebar activeItem={activeItem} onItemSelect={handleItemSelect} />

      {/* Right panel: Main View with Dynamic Header and Scrollable Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Dynamic Nav Bar */}
        <Navbar
          title={currentTitle}
          useDemoData={useDemoData}
          onToggleDemoData={() => setUseDemoData((prev) => !prev)}
        />

        {/* Scrollable View Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-6xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  const [useDemoData, setUseDemoData] = useState(true);

  const stats = useDemoData ? demoStats : emptyStats;
  const transactions = useDemoData ? demoTransactions : [];
  const tickets = useDemoData ? demoTickets : [];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout useDemoData={useDemoData} setUseDemoData={setUseDemoData} />
        }
      >
        <Route index element={<Dashboard stats={stats} />} />
        <Route
          path="transactions"
          element={<Transactions transactions={transactions} />}
        />
        <Route
          path="support"
          element={
            <Support
              tickets={tickets}
              supportEmail="support@crypto-gram.com"
              averageWaitTime="3 mins"
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
