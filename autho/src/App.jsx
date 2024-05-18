import React, { useState } from 'react';
import './App.css';

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState('0');
  const [marginLeft, setMarginLeft] = useState('0');

  const openNav = () => {
    setSidebarWidth('250px');
    setMarginLeft('250px');
  };

  const closeNav = () => {
    setSidebarWidth('0');
    setMarginLeft('0');
  };

  return (
    <div>
      <div id="mySidebar" className="sidebar" style={{ width: sidebarWidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div id="main" style={{ marginLeft: marginLeft }}>
        {/* {onClick?<button className='openbtn' onClick={}></button>} */}
        <button className="openbtn" onClick={openNav}>☰ Open Sidebar</button>  
        <h2>Collapsed Sidebar</h2>
        <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
      </div>
    </div>
  );
};

export default Sidebar;
