import React, { useEffect, useState } from 'react';
import bottle from '../assets/images/bottle1.svg';
import bottleside from '../assets/images/bottleside.png';
import printer from '../assets/images/printer.svg';
// import lines from '../assets/images/lines.svg';
import lines2 from '../assets/images/lines2.svg';

import backbutton from '../assets/images/backbutton.svg'
import { Link, useParams } from 'react-router-dom';
import { viewOrderAPI } from '../services/OrderAPI/OrderAPI';

const ViewOrder: React.FC = () => {

  // interface OrderDetails {
  //   _id: string;
  //   customer: string;
  // salesman: string;
  // warehouse:string,
  // date: string;
  // orderNumber: string;
  // paymentMode: string;
  // items: [];
  // notes: string;
  // termsAndCondition: string;
  // }

  // const [viewOrder, setViewOrder] = useState<OrderDetails[]>([]); // Changed to any for flexibility
  // const { id } = useParams(); // Get the staff ID from the URL

  // useEffect(() => {
  //   const fetchOrderView = async () => {
  //     try {
  //       const response = await viewOrderAPI(id as string); // Use the dynamic staff ID here
  //       console.log(response);
  //       setViewOrder(response);
  //     } catch (error: any) {
  //       console.error("Error fetching staff data:", error.message);
  //     }
  //   };

  //   if (id) {
  //     fetchOrderView();
  //   }
  // }, [id]);

  // if (!viewOrder) return <div>Loading...</div>; // Loading state

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // if (!order) {
  //   return <p>Loading order details...</p>;
  // }
  const { id } = useParams<{ id: any }>(); // Assume you're using React Router to get the order ID from the URL
  const [order, setOrder] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await viewOrderAPI(id);
        setOrder(orderData);
      } catch (error) {
        setError("Failed to fetch order details.");
      }
    };

    fetchOrder();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!order) {
    return <p>Loading order details...</p>;
  }


  return (
    <div className="flex min-h-screen w-full">


      {/* Main content: View Order */}
      <div className="flex-1 p-8 max-h-screen overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-md mx-auto">
        {/* Header Section */}
        <div className="flex gap-3 items-center">
          <Link to="/orders">
            <button className="h-10 px-2.5 bg-[#f6f6f6] rounded-[56px]">
              <img src={backbutton} alt="Back" />
            </button>
          </Link>
          <h2 className="text-xl font-bold">View Orders Details</h2>
        </div>

        <div className="flex gap-3">
          <p className="text-sm text-gray-500 mt-2">Order</p>
          <div className="mt-2">
            <img src={lines2} alt="" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Order# {order.orderNumber || "N/A"}</p>
          <div className="mt-2">
            <img src={lines2} alt="" />
          </div>
          <div className="h-[25px] px-1.5 py-1 bg-[#f2f2f2] rounded justify-start items-start gap-2 inline-flex mt-1">
            <div className="text-[#4b5c79] text-sm font-semibold font-['Inter']">{order.status || "Draft"}</div>
          </div>
        </div>
        <hr className="mt-2" />
        <div className="flex">
          <p className="text-sm text-gray-500 mt-2">Purchase date: <span className="font-bold">{new Date(order.date).toLocaleDateString()}</span></p>
        </div>

        {/* Item Details */}
        {order.items && order.items.map((item: any, index: number) => (
          <div key={index} className="mt-6 bg-gradient-to-r from-[#e3e6d5] to-[#f7e7ce] rounded-lg flex justify-between items-center p-3">
            <div className="flex items-center gap-4">
              <img src={bottle} alt="Item" />
              <div className="flex gap-10">
                <div>
                  <p className="text-sm text-gray-500">Items</p>
                  <p className="font-semibold">{item.itemName}</p>
                </div>
                <div>
                  <img src={lines2} alt="" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ordered</p>
                  <p>{item.quantity} PCS</p>
                </div>
                <div>
                  <img src={lines2} alt="" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Status</p>
                  <p className="font-semibold">{order.paymentMode}</p>
                </div>
                <div>
                  <img src={lines2} alt="" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rate</p>
                  <p className="font-semibold">Rs. {item.price}</p>
                </div>
                <div>
                  <img src={lines2} alt="" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="font-semibold text-lg">Rs. {item.amount}</p>
                </div>
              </div>
            </div>
            <div>
              <img src={bottleside} alt="" className="w-12 h-12" />
            </div>
          </div>
        ))}

        {/* Purchase and Delivery Info */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Purchased By */}
          <div className="p-4 bg-gray-50 rounded-lg flex flex-col justify-between h-full min-h-[250px]">
            <div>
              <p className="font-semibold">Purchased By</p>
              <p className="text-sm text-gray-500 mt-2">{order.customer || "N/A"}</p>
              <p className="text-sm text-gray-500">{order.customerLocation || "N/A"}</p>

              <p className="font-semibold mt-4">Delivered By</p>
              <p className="text-sm text-gray-500 mt-2">{order.salesman || "N/A"}</p>
              <p className="text-sm text-gray-500">Vehicle no: {order.vehicleNo || "N/A"}</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="p-4 bg-gray-50 rounded-lg flex flex-col h-full min-h-[250px]">
            <div className="flex-grow">
              <p className="font-semibold">Order Summary</p>
              <div className="text-sm text-gray-500 mt-2">
                <p>Untaxed Amount: Rs. {order.untaxedAmount || "0.00"}</p>
                <p>SGST: Rs. {order.sgst || "0.00"}</p>
                <p>CGST: Rs. {order.cgst || "0.00"}</p>
              </div>
              <div className="text-right mt-4">
                <p className="font-semibold text-lg">Total: Rs. {order.totalAmount || "0.00"}</p>
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
