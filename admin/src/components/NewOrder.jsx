import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';

function NewOrder() {
  const [orderDetails, setOrderDetails] = useState({
    customer: '',
    salesman: '',
    date: '',
    orderNumber: 'IN-3748',
    paymentMode: '',
    items: [{ product: '', quantity: 0, rate: 0, amount: 0 }],
    notes: '',
    terms: '',
  });

  // Update order details
  const updateOrder = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  // Add a new item row
  const addItem = () => {
    setOrderDetails({
      ...orderDetails,
      items: [...orderDetails.items, { product: '', quantity: 0, rate: 0, amount: 0 }],
    });
  };

  return (
    <>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 p-8 bg-gray-50 min-h-screen">
          <div className="container mx-auto p-4 bg-gray-50">
            <h1 className="text-xl font-semibold mb-6">Create New Order</h1>

            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Customer and Salesman Selection */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 font-medium">Select Customer</label>
                  <select
                    name="customer"
                    value={orderDetails.customer}
                    onChange={updateOrder}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select customer</option>
                    {/* Add customer options */}
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Select Salesman</label>
                  <select
                    name="salesman"
                    value={orderDetails.salesman}
                    onChange={updateOrder}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select salesman</option>
                    {/* Add salesman options */}
                  </select>
                </div>
              </div>

              {/* Date and Order Number */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 font-medium">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={orderDetails.date}
                    onChange={updateOrder}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Order Number</label>
                  <input
                    type="text"
                    name="orderNumber"
                    value={orderDetails.orderNumber}
                    onChange={updateOrder}
                    className="w-full p-2 border rounded-md"
                    readOnly
                  />
                </div>
              </div>

              {/* Payment Mode */}
              <div className="mb-4">
                <label className="block mb-2 font-medium">Payment Mode</label>
                <select
                  name="paymentMode"
                  value={orderDetails.paymentMode}
                  onChange={updateOrder}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select payment mode</option>
                  {/* Add payment options */}
                </select>
              </div>

              {/* Add Item Section */}
              <div className="mb-4">
                <h2 className="font-semibold mb-2">Add Item</h2>
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="grid grid-cols-5 gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Product"
                      value={item.product}
                      onChange={(e) => {
                        const updatedItems = [...orderDetails.items];
                        updatedItems[index].product = e.target.value;
                        setOrderDetails({ ...orderDetails, items: updatedItems });
                      }}
                      className="col-span-2 p-2 border rounded-md"
                    />
                    <input
                      type="number"
                      placeholder="Quantity"
                      value={item.quantity}
                      onChange={(e) => {
                        const updatedItems = [...orderDetails.items];
                        updatedItems[index].quantity = parseInt(e.target.value);
                        setOrderDetails({ ...orderDetails, items: updatedItems });
                      }}
                      className="p-2 border rounded-md"
                    />
                    <input
                      type="number"
                      placeholder="Rate"
                      value={item.rate}
                      onChange={(e) => {
                        const updatedItems = [...orderDetails.items];
                        updatedItems[index].rate = parseFloat(e.target.value);
                        setOrderDetails({ ...orderDetails, items: updatedItems });
                      }}
                      className="p-2 border rounded-md"
                    />
                    <input
                      type="number"
                      placeholder="Amount"
                      value={item.quantity * item.rate}
                      readOnly
                      className="p-2 border rounded-md bg-gray-100"
                    />
                  </div>
                ))}
                <button
                  onClick={addItem}
                  className="mt-2 text-blue-500 hover:underline"
                >
                  + Add Item
                </button>
              </div>

              {/* Notes and Terms */}
              <div className="mb-4">
                <label className="block mb-2 font-medium">Add Notes</label>
                <textarea
                  name="notes"
                  value={orderDetails.notes}
                  onChange={updateOrder}
                  className="w-full p-2 border rounded-md"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-medium">Terms & Conditions</label>
                <textarea
                  name="terms"
                  value={orderDetails.terms}
                  onChange={updateOrder}
                  className="w-full p-2 border rounded-md"
                ></textarea>
              </div>

              {/* Total and Actions */}
              <div className="text-right">
                <button className="bg-[#820000] rounded-lg text-white py-2 px-4">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewOrder;
