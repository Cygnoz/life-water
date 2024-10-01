import React from 'react';
import img from '../assets/images/banking-image 1.png';
import { Link } from 'react-router-dom';

// PaymentCollection component with TypeScript
const PaymentCollection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-6 pt-6">
      {/* Search bar and Add button */}
      <div className="w-full max-w-md flex items-center justify-between px-4 mb-8">
        <div className="flex items-center w-full bg-white rounded-full shadow-md px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none text-sm text-gray-600"
          />
          <i className="fas fa-search text-gray-500"></i>
        </div>
        <Link to="/addpayment">
          <button className="ml-4 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
            <i className="fas fa-plus"></i>
          </button>
        </Link>
      </div>

      {/* Main illustration and text */}
      <div className="flex flex-col items-center">
        {/* Illustration Image */}
        <img
          src={img}
          alt="Illustration"
          className="w-64 h-64 object-cover mb-4"
        />

        {/* No Payment Collection Text */}
        <span className="text-gray-500 text-sm">No Payment Collection</span>
      </div>
    </div>
  );
};

export default PaymentCollection;
