import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    
    <div>
      <Navbar />
 
    <div className="container" >
        <Sidebar />
    </div>
   
   <Footer />
    </div>
  );
};

export default App;
