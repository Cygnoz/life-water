import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';

import Returncustomer from './pages/Returncustomer';
import { useState } from 'react';
import Visithistory from './pages/VisitHistory';

import Summary from './pages/Summary';
import PaymentCollection from './pages/PaymentCollection';
import Addreturncustomer from './components/Addreturncustomer';
import Stock from './pages/Stock';
import Couponsale from './components/CouponSale';
import CouponCustomer from './pages/CouponCustomer';
import CreditCollection from './components/CreditCollection';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar} />
        
        <div className="flex-grow pt-[60px]">
          <Routes>
            <Route path="/customers" element={<Customers />} />
            <Route path="/return" element={<Returncustomer />} />
            <Route path="/visithistory" element={<Visithistory />} />
            <Route path="/addpayment" element={<Addreturncustomer/>} />
            <Route path="/collection" element={<PaymentCollection />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/couponsale" element={<Couponsale />} />
            <Route path="/couponcustomer" element={<CouponCustomer />} />
            <Route path="/creditcollection" element={<CreditCollection />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

