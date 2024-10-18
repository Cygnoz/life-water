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
import Ride from '../Ride/Pages/Ride';
import EditMainRoute from '../Route/Pages/EditMainRoute';
import CreateInternalTransfer from '../Stock/Internal transfer/Pages/CreateInternalTransfer';
import AddItem from '../Stock/Items/Components/AddItem';
import CreateItem from '../Stock/Items/Pages/CreateItem';
import EditItem from '../Stock/Items/Pages/EditItem';
import StockLoaded from '../Stock/Stock loaded/Pages/Stock_loaded';
import UnloadedAdd from '../Stock/Unload stock/Pages/UnloadAdd';
import AddWStock from '../Stock/W stock/Components/AddWStock';
import CreateWStock from '../Stock/W stock/Pages/CreateWstock';



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


               {/* ROUTE */}
              <Route path='/route/createroute' element={<CreateRoute />} />
              <Route path='/route/createmainroute' element={<CreateMainRoute />} />
              <Route path='/route/viewroute/:id' element={<ViewRoute />} />
              <Route path='/route/activeroute' element={<ActiveRoute />} />
              <Route path='/route/editmainroute/:id' element={<EditMainRoute />} />
              <Route path='/route/subroute' element={<SubRoute />} />
              <Route path='/route/newsubroute' element={<CreateSubRoute />} />
              <Route path='/route/editsubroute/:id' element={<EditSubRoute />} />


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

              {/* RIDE */}
              <Route path='/ride' element={<Ride/>}/>

              {/* STOCK */}

                   {/* INTERNAL TRANSFER */}
                   <Route path='/internaltransfer' element={<CreateInternalTransfer/>}/>

                   {/* ITEMS */}
                   <Route path='/additem' element={<AddItem/>}/>
                   <Route path='/item' element={<CreateItem/>}/>
                   <Route path='/edititem' element={<EditItem/>}/>

                   {/* STOCK LOADED */}
                   <Route path='/stockloaded' element={<StockLoaded/>}/>

                   {/* UNLOAD STOCK */}
                   <Route path='/unloadstock' element={<UnloadedAdd/>}/>

                   {/* WAREHOSUE STOCK */}
                   <Route path='/addWstock' element={<AddWStock/>}/>
                   <Route path='/warstock' element={<CreateWStock/>}/>




            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;