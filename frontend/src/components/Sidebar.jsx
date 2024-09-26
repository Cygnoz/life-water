import { useState } from 'react';
import home from '../assets/images/home.svg'
import orders from '../assets/images/orders.svg'
import stock from '../assets/images/stock.svg'
import summary from '../assets/images/summary.svg'
import ret from '../assets/images/Vector.png' 
import users from '../assets/images/users.svg'
import close from '../assets/images/x-mark.svg'
import bars from '../assets/images/bars-4.svg'
import coup from '../assets/images/coup.svg'
import credit from '../assets/images/credit.svg'
import pay from '../assets/images/pay.svg'
import endride from '../assets/images/endride.svg'
import hstory from '../assets/images/history.svg'
import rout from '../assets/images/rout.svg'

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`h-screen ${isSidebarOpen ? 'w-64' : 'w-16'} transition-width duration-300 bg-white  p-5`}>
        <div className="p-4 flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>Menu</h1>
          <button onClick={handleToggleSidebar} className="w-[41px] h-10 px-[9px] py-2  rounded-[27px] flex items-center justify-center">
            <div className="w-6 h-6 relative">{isSidebarOpen ? <img className='bg-[#d8b0b0] rounded-[27px]' src={close} alt="" /> : <img className='bg-white ' src={bars} alt="" /> }</div>
          </button>
        </div>
        <nav className="mt-10">
          {/* Sidebar items */}
          
          <ul>
          <li className="flex items-center p-2 gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl ">
    <img src={home} alt="Orders" className={`w-6 h-6 ${isSidebarOpen ? 'inline-block' : 'hidden'}`} />
    <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Home</span>
  </li>
  <li className="flex items-center p-2 gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl ">
    <img  src={orders} alt="Orders" className={`w-6 h-6 ${isSidebarOpen ? 'inline-block' : 'hidden'}`} />
    <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Orders</span>
  </li>
  <li className="flex items-center p-2 gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl ">
    <img src={users} alt="Customers" className={`w-6 h-6 ${isSidebarOpen ? 'inline-block' : 'hidden'}`} />
    <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Customers</span>
  </li>
  <li className="flex items-center p-2 gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl ">
    <img src={stock} alt="Stock" className={`w-6 h-6 ${isSidebarOpen ? 'inline-block' : 'hidden'}`} />
    <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Stock</span>
  </li>
  <li className="flex items-center p-2 gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl ">
    <img src={summary} alt="Summary" className={`w-6 h-6 ${isSidebarOpen ? 'inline-block' : 'hidden'}`} />
    <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Summary</span>
  </li>
  <li className="flex items-center p-2 gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl ">
    <img src={ret} alt="Return" className={`hover:text-white w-6 h-6 ${isSidebarOpen ? 'inline-block' : 'hidden'}`} />
    <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Return</span>
  </li>
  <li className="flex items-center p-2 gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl ">
    <img src={pay} alt="Payment" className={`w-6 h-6 ${isSidebarOpen ? 'inline-block' : 'hidden'}`} />
    <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Payment Collection</span>
  </li>
  <li className="flex items-center p-2 gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl ">
    <img src={credit} alt="Credit" className={`w-6 h-6 ${isSidebarOpen ? 'inline-block' : 'hidden'}`} />
    <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Credit Issued</span>
  </li>
  <li className="flex items-center p-2 gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl ">
    <img src={coup} alt="Coupon" className={`w-6 h-6 ${isSidebarOpen ? 'inline-block' : 'hidden'}`} />
    <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Coupon Customers</span>
  </li>
  <li className="flex items-center p-2 gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl ">
    <img src={rout} alt="Route" className={`w-6 h-6 ${isSidebarOpen ? 'inline-block' : 'hidden'}`} />
    <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Route</span>
  </li>
  <li className="flex items-center p-2 gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl ">
    <img src={hstory} alt="History" className={`w-6 h-6 ${isSidebarOpen ? 'inline-block' : 'hidden'}`} />
    <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Visit History</span>
  </li>
  <li className="flex items-center p-2 gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl ">
    <img src={endride} alt="End Ride" className={`w-6 h-6 ${isSidebarOpen ? 'inline-block' : 'hidden'}`} />
    <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>End Ride</span>
  </li>
</ul>

</nav>

      </div>
    </>
  );
}

export default Sidebar;


// import React, { useState } from 'react';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-white text-black w-64 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out`}
//       >
//         <div className="p-4">
//           <div className="flex justify-between items-center">
//             <h2 className="text-2xl font-bold">Menu</h2>
//             <button
//               onClick={toggleSidebar}
//               className="text-white bg-red-500 p-1 rounded-md"
//             >
//               <img src={close} alt="" />
//             </button>
//           </div>
//           <ul className="mt-4">
//             <li className="py-2 flex gap-4 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl"><img src={home} alt="" /> Home</li>
//             <li className="py-2">Menu Item 2</li>
//             <li className="py-2">Menu Item 3</li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4">
//         <button
//           onClick={toggleSidebar}
//           className="text-white p-2 rounded-md"
//         >
//           <img src={bars} alt="" />
//         </button>
        
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

