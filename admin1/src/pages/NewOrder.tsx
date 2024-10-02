import React, { useState, ChangeEvent } from 'react';
import trash from '../assets/images/trash.svg'
import circleplus from '../assets/images/Icon.svg'
import pen from '../assets/images/pen.svg'
import printer from '../assets/images/printer.svg'

interface Item {
  product: string;
  quantity: number;
  rate: number;
  amount: number;
}

interface OrderDetails {
  customer: string;
  salesman: string;
  date: string;
  orderNumber: string;
  paymentMode: string;
  items: Item[];
  notes: string;
  terms: string;
}

const NewOrder: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
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
  const updateOrder = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      <div className='flex bg-gray-50'>
      <div className="max-h-screen w-[70%]">
       

       {/* Main content */}
       <div className="flex-1 min-h-screen">
         <div className="container mx-auto p-4">
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
                   className="w-full p-2 border rounded-md  text-gray-400"
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
                   className="w-full p-2 border rounded-md text-gray-400"
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
                   className="w-full p-2 border rounded-md  text-gray-400"
                 />
               </div>
               <div>
                 <label className="block mb-2 font-medium">Order Number</label>
                 <input
                   type="text"
                   name="orderNumber"
                   value={orderDetails.orderNumber}
                   className="w-full p-2 border rounded-md  text-gray-400"
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
                 className="w-full p-2 border rounded-md  text-gray-400"
               >
                 <option value="" className='text-gray-200'>Select payment mode</option>
                 {/* Add payment options */}
               </select>
             </div>

             {/* Add Item Section */}
             <div className="mb-4">
               <h2 className="font-semibold mb-2">Add Item</h2>
               {/* {orderDetails.items.map((item, index) => (
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
                       updatedItems[index].quantity = parseInt(e.target.value) || 0;
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
                       updatedItems[index].rate = parseFloat(e.target.value) || 0;
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
               ))} */}

<table className="w-full text-left">
              <thead className=' bg-[#fdf8f0]'>
                <tr className="border-b">
                  <th className="p-2">Product</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Rate</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">
                    <label>Type or Click</label>
                    <select name="" id="" className='text-gray-400'>
                      <option value=""></option>
                    </select>
                  </td>
                  <td className="p-2">0</td>
                  <td className="p-2">0.00</td>
                  <td className="p-2">0.00</td>
                  <td className="p-2">
                  <button className="text-blue-500 mx-2 items-center">
                      <img src={pen} alt="" />
                    </button>
                    <button className="text-red-500 ml-2"><img src={trash} alt="" /></button>

                  </td>
                </tr>

              </tbody>
            </table>

               <button
                 onClick={addItem}
                 className="mt-3 flex text-red-700"
                 type="button"
               >
                 <img className='my-1 mx-1' src={circleplus} alt="" />
                  Add Item
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
                 placeholder='Add a Note'
               ></textarea>
             </div>

             <div className="mb-4">
               <label className="block mb-2 font-medium">Terms & Conditions</label>
               <textarea
                 name="terms"
                 value={orderDetails.terms}
                 onChange={updateOrder}
                 className="w-full p-2 border rounded-md"
                 placeholder='Add Terms and Condition of Your Business'
               ></textarea>
               
             </div>

             {/* Total and Actions */}

           </div>
         </div>
       </div>
     </div>


     
     <div className="flex w-[30%] h-[250px] p-6 rounded-lg shadow-md mt-16 bg-white">

    <div className='justify-center'>
        <div className='flex my-2'>
          <h3 className=''>Untaxed Amount</h3>
          <h1 className='text-black font-bold ms-40'>Rs 0.00</h1>
        </div>
        <div className='flex my-1'>
        <h3>SGST</h3>
          <h1 className='text-gray-400 font-bold ms-60'>Rs 0.00</h1>
        </div>
        <div className='flex my-1'>
        <h3>CGST</h3>
          <h1 className='text-gray-400 font-bold ms-60'>Rs 0.00</h1>
        </div>
        <div className='flex my-1'>
        <h3 className='text-black font-bold'>Total</h3>
          <h1 className='text-black font-bold ms-60'>Rs 0.00</h1>
        </div>

      <div className='flex ms-24 mt-5'>
      <div>
        <button className="bg-gray-200 rounded-lg text-black py-2 px-5 m-2">
          Cancel
        </button>

      </div>
      <div>
        <button className="bg-gray-200 rounded-lg text-black py-2 px-5 m-2 flex items-center">
        <img src={printer} className='me-1 mt-1 -ms-2'  alt="" />
        Print
        </button>
      </div>
      <div>
        <button className="bg-[#820000] rounded-lg text-white py-2 px-5 m-2">
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
