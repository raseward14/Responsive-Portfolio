import React, { useState } from 'react';
import './style.css';
import DateTime from '../DateTime';
import Ink from '../Ink';
import { Outlet } from 'react-router-dom';
// import Nav from '../Navbar';

const Layout = ({ backgroundColor, setBackgroundColor }) => {
  return (
    <div style={{ backgroundColor: backgroundColor, height: '100%' }}>
      <DateTime className="DateTime"></DateTime>
      {/* <aside>
        <Nav />
      </aside> */}
      <div id="page-body">
        <Ink className="Ink" setBackgroundColor={setBackgroundColor} backgroundColor={backgroundColor}></Ink>
        <Outlet />
      </div>
      <div style={{ height: '22vh' }}></div>
    </div>
  );
};
export default Layout;
