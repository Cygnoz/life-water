
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ViewOrder from './components/ViewOrder';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/vieworder" element={<ViewOrder />} />
      </Routes>
    </>
  );
};

export default App;

