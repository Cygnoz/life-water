import React from 'react'
import img from '../assets/images/banking-image 1.png'


const PaymentCollection = () => {
  
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gray-50 p-4">
    {/* Search Bar and Add Button */}
    <div className="flex items-center justify-between w-full max-w-xl mt-4">
      {/* Search Bar */}
      <div className="flex items-center flex-grow bg-white shadow-md rounded-full p-2">
        <img src={filter} />
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-4 text-gray-700 bg-transparent border-none focus:outline-none"
        />
      </div>

      {/* Add Button */}
      <button className="ml-3 p-2 bg-red-500 rounded-full shadow-md">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
      </button>
    </div>

    {/* Illustration and Message */}
    <div className="flex flex-col items-center justify-center mt-20">
      {/* Blank space for the image, you can add your image source here */}
      <div className="w-60 h-60 bg-gray-200 rounded-full flex items-center justify-center mb-4">
        {/* Replace with your image below */}
        <img src={img} alt="No Payment Illustration" className="w-full h-full object-contain" />
        {/* <p className="text-gray-500">Your Image Here</p> */}
      </div>
      <p className="text-gray-500">No Payment Collection</p>
    </div>
  </div>
  )
}

export default PaymentCollection