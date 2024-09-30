import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Customers from './pages/Customers';

const App: React.FC = () => {
  return (
    
      <Routes>
        <Route path="/about" element={<Customers title={''} amount={0} />} />
      </Routes>
  );
}

export default App;
