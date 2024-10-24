import React, { useState } from 'react';
import home from '../assets/images/home.svg';
import orders from '../assets/images/orders.svg';
import stock from '../assets/images/stock.svg';
import summary from '../assets/images/summary.svg';
import ret from '../assets/images/Vector.png';
import users from '../assets/images/users.svg';
import close from '../assets/images/x-mark.svg';
import bars from '../assets/images/bars-4.svg';
import coup from '../assets/images/coup.svg';
import credit from '../assets/images/credit.svg';
import pay from '../assets/images/pay.svg';
import endride from '../assets/images/endride.svg';
import hstory from '../assets/images/history.svg';
import rout from '../assets/images/rout.svg';
import { useNavigate } from 'react-router-dom';
import userprofile from '../assets/images/profile1.png';

interface SidebarProps {
  isSidebarOpen: boolean;
  handleToggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, handleToggleSidebar }) => {
  const [pagetitle, setPageTitle] = useState(''); // State to store the current title
  const navigate = useNavigate();

  const handleNavigation = (path: string, pagetitle: string) => {
    setPageTitle(pagetitle); // Update the page title based on the clicked sidebar item
    navigate(path);
    handleToggleSidebar();
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[60px] bg-white shadow-lg z-50 flex items-center justify-between p-4">
        {/* Toggle Button (for small screens) */}
        {!isSidebarOpen && (
          <button
            onClick={handleToggleSidebar}
            className="lg:hidden z-50"
            style={{ position: 'relative' }}
          >
            <img className="w-6 h-6" src={bars} alt="Toggle Sidebar" />
          </button>
        )}
        <h1 className='font-bold'>{pagetitle}</h1> {/* Display the current title */}
        
        <div className='w-25 flex gap-2'>
          {pagetitle === 'End Ride' || pagetitle === 'Customers' ? (
            <div>
              <p className='text-sm'>Hello <span className='font-bold'>User</span></p>
              <p className='text-sm'>Welcome</p>
              <p className='text-sm text-green-500'>last login</p>
            </div>
          ) : null}
          <img src={userprofile} alt="User Profile" width={40} />
          </div>
      </div>

      {/* Sidebar for larger screens */}
      <div className={`fixed left-0 h-screen bg-white mt-10 transition-width duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-x-hidden z-40`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl mt-5 font-bold">Menu</h1>
          <button onClick={handleToggleSidebar}>
            <img className="w-6 h-6 bg-[#d8b0b0] rounded-[27px] mt-5" src={close} alt="Close Sidebar" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-4 ml-2">
          <ul>
            <li onClick={() => handleNavigation('/home', 'Home')} className="flex items-center p-2 gap-4 mb-1 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl">
              <img src={home} alt="Home" className="w-6 h-6" />
              <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Home</span>
            </li>
            <li onClick={() => handleNavigation('/orders', 'Orders')} className="flex items-center p-2 gap-4 mb-1 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl">
              <img src={orders} alt="Orders" className="w-6 h-6" />
              <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Orders</span>
            </li>
            <li onClick={() => handleNavigation('/customers', 'Customers')} className="flex items-center p-2 gap-4 mb-1 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl">
              <img src={users} alt="Customers" className="w-6 h-6" />
              <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Customers</span>
            </li>
            <li onClick={() => handleNavigation('/stock', 'Stock')} className="flex items-center p-2 gap-4 mb-1 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl">
              <img src={stock} alt="Stock" className="w-6 h-6" />
              <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Stock</span>
            </li>
            <li onClick={() => handleNavigation('/summary', 'Summary')} className="flex items-center p-2 gap-4 mb-1 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl">
              <img src={summary} alt="Summary" className="w-6 h-6" />
              <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Summary</span>
            </li>
            <li onClick={() => handleNavigation('/return', 'Return')} className="flex items-center p-2 gap-4 mb-1 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl">
              <img src={ret} alt="Return" className="hover:text-white w-6 h-6" />
              <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Return</span>
            </li>
            <li onClick={() => handleNavigation('/collection', 'Payment Collection')} className="flex items-center p-2 gap-4 mb-1 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl">
              <img src={pay} alt="Payment" className="w-6 h-6" />
              <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Payment Collection</span>
            </li>
            <li onClick={() => handleNavigation('/credit', 'Credit Issued')} className="flex items-center p-2 gap-4 mb-1 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl">
              <img src={credit} alt="Credit" className="w-6 h-6" />
              <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Credit Issued</span>
            </li>
            <li onClick={() => handleNavigation('/couponcustomer', 'Coupon Customers')} className="flex items-center p-2 gap-4 mb-1 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl">
              <img src={coup} alt="Coupon" className="w-6 h-6" />
              <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Coupon Customers</span>
            </li>
            <li onClick={() => handleNavigation('/route', 'Route')} className="flex items-center p-2 gap-4 mb-1 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl">
              <img src={rout} alt="Route" className="w-6 h-6" />
              <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Route</span>
            </li>
            <li onClick={() => handleNavigation('/visithistory', 'Visit History')} className="flex items-center p-2 gap-4 mb-1 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl">
              <img src={hstory} alt="History" className="w-6 h-6" />
              <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>Visit History</span>
            </li>
            <li onClick={() => handleNavigation('/end-ride', 'End Ride')} className="flex items-center p-2 gap-4 mb-1 hover:text-white hover:bg-gradient-to-r from-[#820000] to-[#2c353b] rounded-2xl">
              <img src={endride} alt="End Ride" className="w-6 h-6" />
              <span className={`${isSidebarOpen ? 'inline-block ml-3' : 'hidden'}`}>End Ride</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
