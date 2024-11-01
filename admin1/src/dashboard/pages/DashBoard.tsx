// MyComponent.tsx
import React from 'react';
import SalesAndPurchases from "../dashboard components/SalesAndPurchases";
import PieChart from '../dashboard components/PieChart';

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 bg-gray-100 rounded-lg">
      <div className="bg-white p-5 rounded-lg shadow-md flex-grow mb-5 md:mb-0 md:mr-5">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Sales and Purchase</h2>
        <SalesAndPurchases />
      </div>
      <div className="bg-white p-5 rounded-lg shadow-md flex-grow md:-5">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Total Customers:</h2>
        <PieChart />
      </div>
    </div>
  );
};

export default MyComponent;
