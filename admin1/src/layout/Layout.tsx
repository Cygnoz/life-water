import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import SubHeader from './SubHeader';
import CreateOrder from '../pages/Createorder';
import ViewOrder from '../components/ViewOrder';
import CreateStaff from '../pages/Createstaff';
import NewOrder from '../pages/NewOrder';
import EditStaff from '../pages/EditStaff';
import ActiveRoute from '../Route/Pages/Activeroute';
import SubRoute from '../Route/Pages/SubRoute';
import EditSubRoute from '../Route/Pages/EditSubRoute';
import CreateSubRoute from '../Route/Components/CreateSubRoute';
import CreateRoute from '../Route/Pages/Createroute';
import AddStaff from '../pages/AddStaff';
import CreateMainRoute from '../Route/Components/CreateMainRoute';

const App: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState<string>(''); // Store selected nav
  const [subhead, setSubhead] = useState<{ headName: string; subRoute: string }[]>([]); // Store subhead

  const handleNavSelect = (nav: string, subhead: any[]) => {
    setSelectedNav(nav);
    setSubhead(subhead); // Set subhead when nav is selected
  };

  return (
    <>
      {/* Header at the top, spans full width */}
      <div className="flex h-[1080px] bg-[#f6f6f6]">
        {/* Sidebar on the left, fixed width */}
        <Sidebar onSelect={handleNavSelect} className="w-1/4" />
        {/* Main content (SubHeader) on the right, takes up remaining space */}
        <div className="flex-1 p-4">
          <Header />
          <SubHeader selectedNav={selectedNav} subhead={subhead} /> {/* Pass selectedNav to SubHeader */}
          <div  className='h-screen bg-[#f6f6f6]'>
            <Routes>
              <Route path='/orders' element={<CreateOrder />} />
              <Route path='/addneworder' element={<NewOrder />} />
              <Route path='/vieworder' element={<ViewOrder />} />
              <Route path='/staff' element={<CreateStaff />} />
              <Route path='/addstaff' element={<AddStaff />} />
              <Route path='/editstaff' element={<EditStaff />} />
              <Route path='/route/createroute' element={<CreateRoute />} />
              <Route path='/route/createmainroute' element={<CreateMainRoute />} />
              <Route path='/route/activeroute' element={<ActiveRoute />} />
              <Route path='/route/subroute' element={<SubRoute />} />
              <Route path='/route/newsubroute' element={<CreateSubRoute />} />
              <Route path='/route/editsubroute' element={<EditSubRoute />} />

            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;