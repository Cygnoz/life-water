import React, { useState } from 'react';

const Addreturncustomer: React.FC = () => {
  // You can add state for form handling if needed
  const [date, setDate] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [bottlesInHand, setBottlesInHand] = useState<string>('');
  const [returnBottle, setReturnBottle] = useState<string>('');
  const [depositAmount, setDepositAmount] = useState<string>('');
  const [returnDepositAmount, setReturnDepositAmount] = useState<string>('');
  const [remarks, setRemarks] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
          {/* Form Start */}
          <form onSubmit={handleSubmit}>
            {/* Date Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={date}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
              />
            </div>

            {/* Search for Customer */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Search For Customer:</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search customer"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                />
                <i className="fas fa-search absolute right-3 top-3 text-gray-500"></i>
              </div>
            </div>

            {/* Number Of Bottles In Hand */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Number Of Bottles In Hand</label>
              <input
                type="text"
                placeholder="Enter No of Bottles In Hand"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={bottlesInHand}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBottlesInHand(e.target.value)}
              />
            </div>

            {/* Return Bottle */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Return Bottle</label>
              <input
                type="text"
                placeholder="Return Bottle"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={returnBottle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReturnBottle(e.target.value)}
              />
            </div>

            {/* Deposit Amount */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Deposit Amount</label>
              <input
                type="text"
                placeholder="Enter the Deposit Amount"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={depositAmount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDepositAmount(e.target.value)}
              />
            </div>

            {/* Return Deposit Amount */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Return Deposit Amount</label>
              <input
                type="text"
                placeholder="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={returnDepositAmount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReturnDepositAmount(e.target.value)}
              />
            </div>

            {/* Remarks */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Remarks</label>
              <textarea
                placeholder="Enter Remarks"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={remarks}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setRemarks(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addreturncustomer;
