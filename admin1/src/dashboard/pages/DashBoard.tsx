import React from 'react';
import SalesAndPurchases from "../dashboard components/SalesAndPurchases";
import PieChart from '../dashboard components/PieChart';
import SalesbyPaymentMode from '../dashboard components/SalesbyPaymentMode';

const MyComponent: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Main layout container with responsive gap and flex direction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        {/* Sales and Purchases Card */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Sales and Purchase</h2>
          <SalesAndPurchases />
        </div>
        
        {/* Total Customers Card */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Total Customers</h2>
          <PieChart />
        </div>
        
      </div>

      {/* Full-width Sales by Payment Mode Card */}
      <div className="bg-gray-100rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Top Customers by Sales Volume</h2>
        <SalesbyPaymentMode />
      </div>
    </div>
  );
}

export default MyComponent;
