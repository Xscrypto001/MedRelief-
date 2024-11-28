import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import HealthcareFundraiserDashboard from './pages/Dashboard';
import './index.css';
import Signup from './components/register';
//import Dashboard from './components/Dashboard';
//import Payout from './components/Payout';
const App = () => {
  return (
     <Router>
       <Routes>
        <Route path="/" element={<Login />} />
<<<<<<< HEAD
        <Route path="/dashboard/donations" element={<  HealthcareFundraiserDashboard />} />

      {/*   <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
=======
        <Route path="/signup" element={<Signup />} />
        {/*<Route path="/dashboard" element={<Dashboard />} />
>>>>>>> 3e7bd6358c12b8cc8929fa31d7dde86f6c8ace41
        <Route path="/payout" element={<Payout />} />*/}
      </Routes> 
     </Router>
  );
};

export default App;
