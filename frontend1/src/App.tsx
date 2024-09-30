import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';

import Returncustomer from './pages/Returncustomer';
import { useState } from 'react';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar} />
        
        <div className="flex-grow p-5 pt-[60px]">
          <Routes>
            <Route path="/customers" element={<Customers />} />
       
            <Route path="/return" element={<Returncustomer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

