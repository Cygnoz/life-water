import React from 'react'



const fields = [
    "Opening",
    "Loaded from Plant",
    "Additional Adding",
    "Total",
    "Bottle Leak",
    "Cap Leak",
    "Water Damage",
    "FOC",
    "Net Total",
    "Empty Bottle",
    "Balance Stock",
  ];


function Summary() {
  return (
    // <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    //     <div className="bg-white p-6 rounded-lg shadow-md w-96">
    //     {/* User Profile */}
    //     <div className="flex items-center justify-between mb-6">
    //       <h2 className="text-lg font-semibold">View Summary</h2>
    //       <img
    //         src="https://via.placeholder.com/40"
    //         alt="User Profile"
    //         className="rounded-full w-10 h-10"
    //       />
    //     </div>

    //     {/* Form */}
    //     <form>
    //       {/* Form Fields */}
    //       {[
    //         "Opening",
    //         "Loaded from Plant",
    //         "Additional Adding",
    //         "Total",
    //         "Bottle Leak",
    //         "Cap Leak",
    //         "Water Damage",
    //         "FOC",
    //         "Net Total",
    //         "Empty Bottle",
    //         "Balance Stock",
    //       ].map((label) => (
    //         <div key={label} className="mb-4">
    //           <label className="block text-gray-700 text-sm font-medium mb-2">
    //             {label}
    //           </label>
    //           <input
    //             type="number"
    //             value="20"
    //             readOnly
    //             className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
    //           />
    //         </div>
    //       ))}

    //       {/* Submit Button */}
    //       <button
    //         type="submit"
    //         className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
    //       >
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">


        
         <div className="flex items-center justify-between mb-6">

           {/* <h2 className="text-lg font-semibold">View Summary</h2>
           <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="rounded-full w-10 h-10"
          /> */}
        </div>
      {/* Summary Form */}
      <form className="space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="flex justify-between items-center">
            <label className="text-gray-700 text-sm font-semibold">{field}</label>
            <input
              type="number"
              value="20"
              readOnly
              className="w-24 px-3 py-1 bg-gray-300 border rounded-lg text-center text-gray-700"
            />
          </div>
        ))}
          <button
            type="submit"
            className="w-full bg-red-800 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Submit
          </button>

      </form>
    </div>
  </div>




  )
}

export default Summary