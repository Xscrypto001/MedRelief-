import React, { useState, useEffect } from 'react';
import { 
  AlertCircle, 
  DollarSign, 
  CreditCard, 
  Heart, 
  Smartphone, 
  BarChart2, 
  Share2, 
  CheckCircle2, 
  Gift 
} from 'lucide-react';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Heart className="text-white mr-3" size={32} />
          <h1 className="text-2xl font-bold text-white">HealthHope</h1>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-blue-200 transition-colors">Dashboard</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors">Campaigns</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors">Donate</a>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all">
            Start Campaign
          </button>
        </div>
      </div>
    </nav>
  );
};

// Donation Methods Component
const DonationMethods = () => {
  const methods = [
    { name: "M-Pesa", icon: <Smartphone />, color: "bg-green-500" },
    { name: "Airtel Money", icon: <Smartphone />, color: "bg-red-500" },
    { name: "Visa", icon: <CreditCard />, color: "bg-blue-500" },
    { name: "Mastercard", icon: <CreditCard />, color: "bg-indigo-500" },
    { name: "PayPal", icon: <DollarSign />, color: "bg-yellow-500" }
  ];

  return (
    <div className="bg-white shadow-xl rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Share2 className="mr-3 text-purple-600" />
        Donation Methods
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {methods.map((method, index) => (
          <div 
            key={index} 
            className={`${method.color} text-white rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform`}
          >
            {method.icon}
            <span className="ml-2">{method.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Progress Tracker Component
const ProgressTracker = () => {
  const [progress, setProgress] = useState(65);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white shadow-xl rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <BarChart2 className="mr-3 text-green-600" />
        Campaign Progress
      </h2>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div 
          className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-in-out" 
          style={{width: `${progress}%`}}
        ></div>
      </div>
      <div className="flex justify-between">
        <span>Goal: $50,000</span>
        <span>Raised: ${(progress * 500).toLocaleString()}</span>
      </div>
    </div>
  );
};

// Donor List Component
const DonorList = () => {
  const donors = [
    { name: "Anonymous", amount: 500, time: "2 hours ago", icon: <Gift /> },
    { name: "John D.", amount: 1000, time: "Today", icon: <CheckCircle2 /> },
    { name: "Sarah M.", amount: 250, time: "Yesterday", icon: <Heart /> }
  ];

  return (
    <div className="bg-white shadow-xl rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <AlertCircle className="mr-3 text-red-600" />
        Recent Donors
      </h2>
      {donors.map((donor, index) => (
        <div 
          key={index} 
          className="flex justify-between items-center py-3 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center">
            {donor.icon}
            <span className="ml-3">{donor.name}</span>
          </div>
          <span className="font-bold text-green-600">${donor.amount}</span>
          <span className="text-gray-500 text-sm">{donor.time}</span>
        </div>
      ))}
    </div>
  );
};

// Main Dashboard Component
const HealthcareFundraiserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <Navbar />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <ProgressTracker />
          <DonationMethods />
        </div>
        <DonorList />
      </div>
    </div>
  );
};

export default HealthcareFundraiserDashboard;