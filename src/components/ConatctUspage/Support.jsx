import React, { useState, useRef } from 'react';

const Support = ({ tickets = [], supportEmail = 'support@crypto-gram.com', averageWaitTime = '3 mins' }) => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getTicketStatusStyle = (status) => {
    return status === 'Open'
      ? 'bg-[#5F00D9]/10 text-[#5F00D9] border-[#5F00D9]/20'
      : 'bg-gray-100 text-gray-500 border-gray-200';
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in font-sans">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Support Center</h2>
        <p className="text-gray-500 text-sm mt-1">Need help with your account or transactions? Send us a ticket or review existing requests.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Support Ticket Submission Form */}
        <div ref={formRef} className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          {submitted ? (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Ticket Submitted Successfully</h3>
              <p className="text-gray-500 text-sm mt-1 max-w-sm">We have received your request and our support team will contact you shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-4 py-2 bg-[#5F00D9] hover:bg-[#4B00B4] text-white text-sm font-semibold rounded-xl cursor-pointer transition-colors duration-200"
              >
                Submit another ticket
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Submit a Ticket</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-gray-600">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#5F00D9] bg-gray-50/30 focus:bg-white transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-600">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#5F00D9] bg-gray-50/30 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-gray-600">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="How can we help you?"
                  className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#5F00D9] bg-gray-50/30 focus:bg-white transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-gray-600">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder="Describe your issue in detail..."
                  className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#5F00D9] bg-gray-50/30 focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3 bg-[#5F00D9] hover:bg-[#4B00B4] text-white text-sm font-semibold rounded-xl cursor-pointer transition-colors duration-200 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Support channels and Tickets log */}
        <div className="flex flex-col gap-6">
          {/* Support Channels */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="p-2.5 bg-[#5F00D9]/5 text-[#5F00D9] rounded-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Email Support</h4>
                <p className="text-xs text-gray-500 mt-0.5">Response within 24 hours</p>
                <a href={`mailto:${supportEmail}`} className="text-sm font-semibold text-[#5F00D9] hover:underline mt-2 inline-block">
                  {supportEmail}
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="p-2.5 bg-[#5F00D9]/5 text-[#5F00D9] rounded-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.083.185.127.391.127.607v3.28c0 .216-.044.422-.127.607m0-4.494a8.04 8.04 0 00-16.502 0m16.502 0c-.083-.185-.127-.391-.127-.607v-3.28c0-.216.044-.422.127-.607m0 4.494H1.75m0 0a8.04 8.04 0 0116.502 0M1.75 8.511c-.083.185-.127.391-.127.607v3.28c0 .216.044.422.127.607m0-4.494v4.494M1.75 13.005v-4.494m0 0h18.5" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Live Chat</h4>
                <p className="text-xs text-gray-500 mt-0.5">Average wait time: {averageWaitTime}</p>
                <button className="text-sm font-semibold text-[#5F00D9] hover:underline mt-2 text-left focus:outline-none cursor-pointer">
                  Start dynamic chat
                </button>
              </div>
            </div>
          </div>

          {/* Active / Past Support Tickets */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-sm font-bold text-gray-900 mb-4">My Tickets</h4>

            {tickets.length === 0 ? (
              /* Empty Tickets State */
              <div className="py-6 text-center">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h5 className="text-xs font-bold text-gray-800">All caught up!</h5>
                <p className="text-[11px] text-gray-400 mt-1 max-w-[180px] mx-auto">
                  You do not have any open support tickets at the moment.
                </p>
                <button
                  onClick={scrollToForm}
                  className="mt-3 text-xs font-bold text-[#5F00D9] hover:underline focus:outline-none cursor-pointer"
                >
                  Create new ticket
                </button>
              </div>
            ) : (
              /* Ticket Listing */
              <div className="flex flex-col gap-3">
                {tickets.map((t) => (
                  <div key={t.id} className="p-3 bg-gray-50/50 hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors flex justify-between items-start gap-2">
                    <div className="flex flex-col gap-0.5 overflow-hidden">
                      <span className="text-[10px] font-mono text-gray-400">{t.id}</span>
                      <span className="text-xs font-bold text-gray-800 truncate">{t.subject}</span>
                      <span className="text-[10px] text-gray-400">{t.date}</span>
                    </div>
                    <span className={`px-2 py-0.5 text-[9px] font-bold rounded-full border ${getTicketStatusStyle(t.status)}`}>
                      {t.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
