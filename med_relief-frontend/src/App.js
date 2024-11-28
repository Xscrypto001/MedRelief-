import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import HealthcareFundraiserDashboard from './pages/Dashboard';
import './index.css';
//import Signup from './components/Signup';
//import Dashboard from './components/Dashboard';
//import Payout from './components/Payout';
const App = () => {
  return (
     <Router>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/donations" element={<  HealthcareFundraiserDashboard />} />

      {/*   <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payout" element={<Payout />} />*/}
      </Routes> 
     </Router>
  );
};

export default App;
