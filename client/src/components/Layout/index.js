import React from 'react';
import './style.css'
import DateTime from '../DateTime';
import Ink from '../Ink';
import { Outlet } from 'react-router-dom';

const Layout = ({ backgroundColor, setBackgroundColor }) => {
    return (
            <div style={{ backgroundColor: backgroundColor, height: '100%' }}>
                <DateTime className="DateTime"></DateTime>
                <div id='page-body'>
                    <Ink className="Ink" setBackgroundColor={setBackgroundColor}></Ink>
                    <Outlet />
                </div>
                <div style={{ height: '13vh' }}></div>
            </div>
    );
};
export default Layout;