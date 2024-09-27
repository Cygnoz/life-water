import React from 'react';
import rupee from '../assets/images/receipt-indian-rupee.svg';

function Customers({ title, amount }) {
  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md border border-gray-200 col-span-2">
          <div className="space-y-4">
            {/* Cash Sale Section */}
            <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center">
                <span className="bg-gray-200 p-2 rounded-full">
                  <img src={rupee} alt="Icon" className="w-6 h-6" />
                </span>
                <div className="ml-4">
                  <p className="text-xl font-bold text-red-500">0 AED</p>
                  <p className="text-sm font-medium text-gray-600">Cash Sale</p>
                </div>
              </div>
            </div>

            {/* Membership Customer Section */}
            <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center">
                <span className="bg-gray-200 p-2 rounded-full">
                  <img src={rupee} alt="Icon" className="w-6 h-6" />
                </span>
                <div className="ml-4">
                  <p className="text-xl font-bold text-red-500">0 AED</p>
                  <p className="text-sm font-medium text-gray-600">Cash Sale</p>
                </div>
              </div>
            </div>

            {/* Membership Section */}
            <hr />
            <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center">
                <span className="bg-gray-200 p-2 rounded-full">
                  <img src={rupee} alt="Icon" className="w-6 h-6" />
                </span>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Membership Customer</p>
                  <p className="text-xl font-bold text-red-500">0 AED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Customers Button */}
      <div className="flex justify-center m-2">
        <button className="w-full md:w-96 py-3 bg-red-600 text-white font-bold rounded-lg">
          All Customers
        </button>
      </div>
    </div>
  );
}

export default Customers;
