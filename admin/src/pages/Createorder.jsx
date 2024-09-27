import React from 'react'
import delivery from '../assets/delivery-box_4047598 1.svg'
import packing from '../assets/packing_4536852 1.svg'
import processing from '../assets/processing_2816119 1.svg'
import shopping from '../assets/shopping-bag_6948334 1.svg'
import plus from '../assets/circle-plus.svg'
import dot from '../assets/ellipsis-vertical.svg'

function Createorder() {
  return (
    <div>
        <h1>Helo</h1>
      <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>        <h1 className="text-2xl font-bold">Create Order</h1>
        </div>
        <div className='flex justify-between'> 
             <button className="bg-[#820000] text-white flex px-5 py-2 rounded-md"><img className='me-2' src={plus} alt="" />New Order</button>
        <button className='ms-2 me-4'><img src={dot} alt="" /></button>
        </div>
      
      </div>
      <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur...</p>
      
      {/* Cards Section */}
      <div className="grid grid-cols-4 gap-4 my-6">
        <div className="p-4 bg-white shadow-md rounded-lg">
        <img src={delivery} alt="" />
          <div className="w-[587px] font-bold leading-normal text-[20px] mt-2">
          Cash Sale
      </div>
      <div className="w-[587px] text-[#797070] leading-normal text-[15px] ">
        Your Hr support at your fingerprints
      </div>
      <div className="w-[587px] text-[#820000;] font-bold leading-normal text-[25px] mt-3">
      120
      </div>
          
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
        <img src={packing} alt="" />
        <div className="w-[587px] font-bold leading-normal text-[20px] mt-2">
        Credit Sale
      </div>
      <div className="w-[587px] text-[#797070] leading-normal text-[15px] ">
        Your Hr support at your fingerprints
      </div>
      <div className="w-[587px] text-[#820000;] font-bold leading-normal text-[25px] mt-3">
      100
      </div>

          
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
        <img src={processing} alt="" />
        <div className="w-[587px] font-bold leading-normal text-[20px] mt-2">
        Sold Item
      </div>
      <div className="w-[587px] text-[#797070] leading-normal text-[15px] ">
        Your Hr support at your fingerprints
      </div>
      <div className="w-[587px] text-[#820000;] font-bold leading-normal text-[25px] mt-3">
      10
      </div>
          
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
        <img src={shopping} alt="" />
        <div className="w-[587px] font-bold leading-normal text-[20px] mt-2">
        Revenue
      </div>
      <div className="w-[587px] text-[#797070] leading-normal text-[15px] ">
        Your Hr support at your fingerprints
      </div>
      <div className="w-[587px] text-[#820000;] font-bold leading-normal text-[25px] mt-3">
      12
      </div>

        
        </div>
      </div>
      
      {/* Table Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <input type="text" className="p-2 border rounded-md w-1/2" placeholder="Search Purchase Order" />
          <div>
            <button className="bg-gray-300 px-4 py-2 rounded-md mr-2">Sort By</button>
            <button className="bg-gray-300 px-4 py-2 rounded-md">Print</button>
          </div>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Sl No</th>
              <th className="p-2">Date</th>
              <th className="p-2">Order No</th>
              <th className="p-2">Customer Name</th>
              <th className="p-2">Mobile</th>
              <th className="p-2">Item</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Salesman</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">1</td>
              <td className="p-2">15 May 2023</td>
              <td className="p-2">INV-44</td>
              <td className="p-2">John Doe</td>
              <td className="p-2">9092333300</td>
              <td className="p-2">Water Dispenser</td>
              <td className="p-2">20</td>
              <td className="p-2">Joey</td>
              <td className="p-2">
                <button className="text-blue-500">👁️</button>
                <button className="text-red-500 ml-2">🗑️</button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2">2</td>
              <td className="p-2">15 May 2023</td>
              <td className="p-2">INV-44</td>
              <td className="p-2">John Doe</td>
              <td className="p-2">9092333300</td>
              <td className="p-2">5Gallon bottle</td>
              <td className="p-2">20</td>
              <td className="p-2">Joey</td>
              <td className="p-2">
                <button className="text-blue-500">👁️</button>
                <button className="text-red-500 ml-2">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Createorder
