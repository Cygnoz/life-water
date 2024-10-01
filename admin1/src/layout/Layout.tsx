
import Sidebar from './Sidebar';
import Header from './Header';
import SubHeader from './SubHeader';
import { Routes, Route } from 'react-router-dom';
// export default function Layout() {
//   return (

//   );
// }

import React from 'react';
import CreateOrder from '../pages/Createorder';
import ViewOrder from '../components/ViewOrder';
import CreateStaff from '../pages/Createstaff';
import NewOrder from '../components/NewOrder';
import EditStaff from '../pages/EditStaff';

// import Header from './layout/Header';
// import SubHeader from './layout/SubHeader';
// import Layout from './layout/Layout';

const App: React.FC = () => {
  return (
    <>
    {/* Header at the top, spans full width */}
   

    {/* Flex container to position Sidebar and SubHeader side by side */}
    <div className="flex h-screen bg-[#f6f6f6]">
      {/* Sidebar on the left, fixed width */}
      <Sidebar className="w-1/4" />

      {/* Main content (SubHeader) on the right, takes up remaining space */}
      <div className="flex-1 p-4">
      <Header />
      <SubHeader />
        <div>
        <Routes>
        <Route path='/orders' element={<CreateOrder/>}/>
        <Route path='/addneworder' element={<NewOrder/>}/>
        <Route path='/vieworder' element={<ViewOrder/>}/>
        <Route path='/staff' element={<CreateStaff/>}/>
        <Route path='/editstaff' element={<EditStaff/>}/>
      
      </Routes>

        </div>

        </div>
      </div>
      
   
  </>
  );
};

export default App;

