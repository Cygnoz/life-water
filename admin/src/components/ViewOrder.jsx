import bottle from '../assets/images/bottle.png'
import bottleside from '../assets/images/bottleside.png'
import printer from '../assets/images/printer.svg'
function ViewOrder() {
  return (
    <>
     <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md  mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">View Order Details</h2>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Draft</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Order# IN-0001</p>
        <p className="text-sm text-gray-500">Purchase Date: 24/06/2024</p>

        {/* Item Details */}
        <div className="mt-6 bg-gradient-to-r from-[#e3e6d5] to-[#f7e7ce] rounded-lg flex justify-between items-center p-3">
          <div className="flex gap-10">
            <img
              src={bottle}
              alt="Item"
              className="w-12 h-12 "
            />
            <div className='mx-5'>
              <p className="text-sm text-gray-500">Items</p>
              <p className="font-semibold">5 Gallon Bottle</p>
            </div>
            <div className='mx-5'>
            <p className="text-sm text-gray-500">Ordered</p>
            <p> 10 PCS</p>
            </div>
            <div>
            <p className="text-sm text-gray-500">Payment Status</p>
            <p className="font-semibold">Success</p>
            </div>
         
          <div className='mx-5'>
            
            <p className="text-sm text-gray-500">Rate: 5</p>
            <p className="font-semibold text-lg">Rs. 50,000.00</p>
            
          </div>
          <div>
          <img src={bottleside} alt="" />
          </div>
        </div>
        </div>

        {/* Purchase and Delivery Info */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Purchased By */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Purchased By</p>
            <p className="text-sm text-gray-500 mt-2">Doneu Auto Garage</p>
            <p className="text-sm text-gray-500">UAE</p>
            
            <p className="font-semibold">Delivered By</p>
            <p className="text-sm text-gray-500 mt-2">Anam Hussain</p>
            <p className="text-sm text-gray-500">Vehicle no: AI-07483</p>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="font-semibold">Order Summary</p>
          <div className="text-sm text-gray-500 mt-2">
            <p>Untaxed Amount: Rs. 0.00</p>
            <p>SGST: Rs. 0.00</p>
            <p>CGST: Rs. 0.00</p>
          </div>
          <div className="text-right mt-4">
            <p className="font-semibold text-lg">Total: Rs. 0.00</p>
          </div>
          <div className="mt-6 text-right">
          <button className="flex justify-end px-4 py-2 text-black rounded-lg">
           <img src={printer} alt="" /> Print
          </button>
        </div>
        </div>

          </div>

          {/* Delivered By */}
         
        

        {/* Order Summary */}
       

        {/* Print Button */}
        
      </div>
    </div></>
  )
}

export default ViewOrder