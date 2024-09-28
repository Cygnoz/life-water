import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';
import Visithistory from './pages/Visithistory';
import Returncustomer from './pages/Returncustomer';
import { useState } from 'react';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
     <BrowserRouter>
  <div className="flex">
    <Sidebar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar} />
    
    {/* Content area with padding to prevent blocking */}
    <div className="flex-grow p-5 pt-[60px]"> {/* Add padding-top of 60px to account for the header */}
      <Routes>
        <Route path="/customers" element={<Customers />} />
        <Route path="/history" element={<Visithistory />} />
        <Route path="/return" element={<Returncustomer />} />
      </Routes>
    </div>
  </div>
</BrowserRouter>
);
}

export default App;
