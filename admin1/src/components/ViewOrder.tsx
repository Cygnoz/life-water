import React from 'react';
import bottle from '../assets/images/bottle.png';
import bottleside from '../assets/images/bottleside.png';
import printer from '../assets/images/printer.svg';
import lines from '../assets/images/lines.svg';
import Sidebar from '../layout/Sidebar';


const ViewOrder: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <div>
        <Sidebar  />
      </div>

      {/* Main content: View Order */}
      <div className="flex-1 p-8 bg-gray-100 max-h-screen overflow-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">View Orders Details</h2>
          </div>
          <p className="text-sm text-gray-500 mt-2">Order# IN-0001</p>
          <p className="text-sm text-gray-500">Purchase Date: 24/06/2024</p>

          {/* Item Details */}
          <div className="mt-6 bg-gradient-to-r from-[#e3e6d5] to-[#f7e7ce] rounded-lg flex justify-between items-center p-3">
            <div className="flex items-center gap-4">
              <img
                src={bottle}
                alt="Item"
                className="w-12 h-12"
              />
              <div className="flex gap-10">
                <div>
                  <p className="text-sm text-gray-500">Items</p>
                  <p className="font-semibold">5 Gallon Bottle</p>
                </div>
                <div>
                  <img src={lines} alt="" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ordered</p>
                  <p>10 PCS</p>
                </div>
                <div>
                  <img src={lines} alt="" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Status</p>
                  <p className="font-semibold">Success</p>
                </div>
                <div>
                  <img src={lines} alt="" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rate</p>
                  <p className="font-semibold">Success</p>
                </div>
                <div>
                  <img src={lines} alt="" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="font-semibold text-lg">Rs. 50,000.00</p>
                </div>
              </div>
            </div>

            <div>
              <img src={bottleside} alt="" className="w-12 h-12" />
            </div>
          </div>

          {/* Purchase and Delivery Info */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Purchased By */}
            <div className="p-4 bg-gray-50 rounded-lg flex flex-col justify-between h-full min-h-[250px]">
              <div>
                <p className="font-semibold">Purchased By</p>
                <p className="text-sm text-gray-500 mt-2">Doneu Auto Garage</p>
                <p className="text-sm text-gray-500">UAE</p>

                <p className="font-semibold mt-4">Delivered By</p>
                <p className="text-sm text-gray-500 mt-2">Anam Hussain</p>
                <p className="text-sm text-gray-500">Vehicle no: AI-07483</p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="p-4 bg-gray-50 rounded-lg flex flex-col h-full min-h-[250px]">
              <div className="flex-grow">
                <p className="font-semibold">Order Summary</p>
                <div className="text-sm text-gray-500 mt-2">
                  <p>Untaxed Amount: Rs. 0.00</p>
                  <p>SGST: Rs. 0.00</p>
                  <p>CGST: Rs. 0.00</p>
                </div>
                <div className="text-right mt-4">
                  <p className="font-semibold text-lg">Total: Rs. 0.00</p>
                </div>
              </div>

              {/* Print Button at the bottom */}
              <div className="mt-auto text-right flex justify-end">
                <button className="px-4 py-2 bg-gray-200 text-black rounded-lg flex justify-end gap-2 items-center">
                  <img src={printer} alt="Print" /> Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
