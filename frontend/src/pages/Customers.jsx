import React from 'react'
import rupee from '../assets/images/receipt-indian-rupee.svg'
function Customers({ title, amount }) {
  return (
    <div>
         <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      {/* Cash Sale Section */}
      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
        <div className="flex items-center">
          <span className="bg-gray-200 p-2 rounded-full">
            <img
              src={rupee} 
              alt="Icon"
              className="w-6 h-6"
            />
          </span>
          <div className="ml-4">
          <p className="text-xl font-bold text-red-500">0 AED</p>
            <p className="text-sm font-medium text-gray-600">Cash Sale</p>
            
          </div>
        </div>
       
      </div>

      {/* Credit Sale Section */}
      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
        <div className="flex items-center">
        <span className="bg-gray-200 p-2 rounded-full">
            <img
              src={rupee} 
              alt="Icon"
              className="w-6 h-6"
            />
          </span>
          <div className="ml-4">
            <p className="text-xl font-bold text-red-500">0 AED</p>
            <p className="text-sm font-medium text-gray-600">Credit Sale</p>

          </div>
        </div>
      </div>

      {/* Membership Customer Section */}
      <div className="flex items-center justify-between p-4 bg-red-100 rounded-lg">
        <div className="flex items-center">
        <span className="bg-gray-200 p-2 rounded-full">
            <img
              src={rupee} 
              alt="Icon"
              className="w-6 h-6"
            />
          </span>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Membership Customer</p>
            <p className="text-xl font-bold text-red-500">0 AED</p>
          </div>
        </div>
      </div>

      
    </div>
    {/* All Customers Button */}
    <div className="flex justify-center">
        <button className="w-96  py-3 mt-4 bg-red-600 text-white font-bold rounded-lg">
          All Customers
        </button>
      </div>
    </div>
  )
}

export default Customers
