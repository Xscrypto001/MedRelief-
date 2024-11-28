import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import './index.css';
import Signup from './components/register';
//import Dashboard from './components/Dashboard';
//import Payout from './components/Payout';
const App = () => {
  return (
     <Router>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/*<Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payout" element={<Payout />} />*/}
      </Routes> 
     </Router>
  );
};

export default App;
