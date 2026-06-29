import React, { useState } from 'react';

const Transactions = ({ transactions = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'Processing':
        return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'Failed':
        return 'bg-rose-50 text-rose-700 border-rose-100';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-100';
    }
  };

  // Filter transactions based on query
  const filteredTransactions = transactions.filter((tx) =>
    tx.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tx.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasData = transactions.length > 0;

  return (
    <div className="flex flex-col gap-6 animate-fade-in font-sans">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Recent Transactions</h2>
        <p className="text-gray-500 text-sm mt-1">Review your recent deposits, withdrawals, and trade order activities.</p>
      </div>

      {!hasData ? (
        /* Empty State UI when transactions list is empty */
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 flex flex-col items-center justify-center text-center">
          {/* Custom vector outline SVG for empty transaction logs */}
          <div className="w-24 h-24 mb-6 text-gray-300 bg-gray-50 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v3.75m-9.75 0h1.875c.621 0 1.125.504 1.125 1.125V18A2.25 2.25 0 0112 20.25H5.25A2.25 2.25 0 013 18v-3.75m9.75 0h1.875c.621 0 1.125.504 1.125 1.125V18"
              />
            </svg>
          </div>

          <h3 className="text-lg font-bold text-gray-900">No Transaction History</h3>
          <p className="text-gray-500 text-sm mt-2 max-w-sm">
            Your ledger is currently empty. Make your first cryptocurrency purchase or transfer funds to get started.
          </p>

          <button className="mt-6 px-6 py-2.5 bg-[#5F00D9] hover:bg-[#4B00B4] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95 cursor-pointer">
            Deposit Funds
          </button>
        </div>
      ) : (
        /* Regular Transaction Table with Search Filter */
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Table header & filters */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-800">History</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 text-xs font-bold rounded-full">
                {filteredTransactions.length} of {transactions.length}
              </span>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search transaction..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#5F00D9] bg-gray-50/30 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {filteredTransactions.length === 0 ? (
            /* No results matched filters empty state */
            <div className="p-12 text-center text-gray-500">
              <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 block">No matching transactions</span>
              <span className="text-xs text-gray-400 mt-1 block">Try checking the spelling or use a different search criteria.</span>
            </div>
          ) : (
            /* Table Data */
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                    <th className="py-4 px-6">ID</th>
                    <th className="py-4 px-6">Type</th>
                    <th className="py-4 px-6">Date</th>
                    <th className="py-4 px-6">Amount</th>
                    <th className="py-4 px-6 text-right">Value (USD)</th>
                    <th className="py-4 px-6 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                  {filteredTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 font-mono text-gray-500">{tx.id}</td>
                      <td className="py-4 px-6 font-semibold text-gray-900">{tx.type}</td>
                      <td className="py-4 px-6 text-gray-400">{tx.date}</td>
                      <td className={`py-4 px-6 font-medium ${tx.amount.startsWith('+') ? 'text-emerald-600' : 'text-gray-900'}`}>{tx.amount}</td>
                      <td className="py-4 px-6 text-right font-medium">{tx.value}</td>
                      <td className="py-4 px-6 text-center">
                        <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${getStatusStyle(tx.status)}`}>
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Transactions;
