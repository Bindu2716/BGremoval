import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Ensure the correct path for your Home component
import Result from './pages/Result'; // Ensure the correct path for your Result component
import BuyCredit from './pages/BuyCredit'; // Ensure the correct path for your BuyCredit component
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <footer />
    </div>
  );
}

export default App;
