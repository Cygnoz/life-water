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
import ViewRoute from '../Route/Components/ViewRoute';
import AddVehicle from '../Vehicle/Components/AddVehicle';
import CreateVehicle from '../Vehicle/Pages/CreateVehicle';
import EditVehicles from '../Vehicle/Pages/EditVehicles';
import ViewVehicle from '../Vehicle/Components/ViewVehicle';
import StaffOverview from '../components/Staffoverview';
import CreateCustomer from '../Customer/Pages/Createcustomer';
import AddCustomer from '../Customer/Components/AddCustomer';
import EditCustomer from '../Customer/Pages/EditCustomer';

import EditIndividual from '../Customer/Pages/EditIndividual';

import ViewCustmor from '../Customer/Components/ViewCustmor';



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

               {/* ORDERS */}
              <Route path='/orders' element={<CreateOrder />} />
              <Route path='/addneworder' element={<NewOrder />} />
              <Route path='/vieworder' element={<ViewOrder />} />


               {/* STAFF */}
              <Route path='/staff' element={<CreateStaff />} />
              <Route path='/addstaff' element={<AddStaff />} />
              <Route path='/editstaff/:id' element={<EditStaff />} />
              <Route path="/viewstaff/:id" element={<StaffOverview />} />


               {/* VEHICLE */}
              <Route path='/route/createroute' element={<CreateRoute />} />
              <Route path='/route/createmainroute' element={<CreateMainRoute />} />
              <Route path='/route/viewroute' element={<ViewRoute />} />
              <Route path='/route/activeroute' element={<ActiveRoute />} />
              <Route path='/route/subroute' element={<SubRoute />} />
              <Route path='/route/newsubroute' element={<CreateSubRoute />} />
              <Route path='/route/editsubroute' element={<EditSubRoute />} />


              {/* VEHICLE */}
              <Route path='/vehicle' element={<CreateVehicle />} />
              <Route path='/vehicle/addvehicle' element={<AddVehicle />} />
              <Route path='/vehicle/editvehicle/:id' element={<EditVehicles />} />
              <Route path='/viewvehicle/:id' element={<ViewVehicle />} />



              {/* CUSTOMER */}
              <Route path='/customer' element={<CreateCustomer/>}/>
              <Route path='/editcustomer' element={<EditCustomer/>}/>
              <Route path='/addcustomer' element={<AddCustomer/>}/>
              
              <Route path='/editindividual' element={<EditIndividual/>}/>
              <Route path='/viewcustomer' element={<ViewCustmor/>}/>


            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;