import "./style.css";
import React, { useState, useEffect } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

import Icons from "../Icons";

function Navbar({ backgroundColor }) {
    const [hoverStyle, setHoverStyle] = useState('orange');
    // When the user clicks the hamburger, toggle between hiding and showing the navbar
    // const menuBtn = document.querySelector('.menu-btn');
    // let menuOpen = false;
    // menuBtn.addEventListener('click', () => {
    //     if(!menuOpen) {
    //         menuBtn.classList.add('open')
    //     }
    // })

    const hamburgerFunction = () => {
        document.getElementById("navMenu").classList.toggle("show");
    };

    useEffect(() => {
        switch (backgroundColor) {
            case '#7BDCB5':
              setHoverStyle('teal-button');
              break;
            case '#00D084':
              setHoverStyle('green-button');
              break;
            case '#8ED1FC':
              setHoverStyle('light-blue-button');
              break;
            case '#0693E3':
              setHoverStyle('blue-button');
              break;
            case '#ABB8C3':
              setHoverStyle('gray-button');
              break;
            case '#EB144C':
              setHoverStyle('red-button');
              break;
            case '#F78DA7':
              setHoverStyle('pink-button');
              break;
            case '#9900EF':
              setHoverStyle('indigo-button');
              break;
            case '#05F725':
              setHoverStyle('lime-button');
              break;
            default:
              setHoverStyle('orange-button');
              break;
          }
          console.log(`from nav component ${backgroundColor}`);
    }, [backgroundColor]);

    return (
        <div className='dropdown1'>
            <div className='menu-button' onClick={hamburgerFunction}>
                <div className='menu-button_burger'></div>
            </div>
            <div id='navMenu' className="navbar-content">
                <Nav className="nav-bar-main">
                    <NavItem>
                        <NavLink className={`${hoverStyle}`} href="/" active>Home</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className={`${hoverStyle}`} href="about">About</NavLink>
                    </NavItem>

                    <NavItem className="float-right">
                        <NavLink className={`${hoverStyle}`} href="contact">Contact</NavLink>
                    </NavItem>

                    <NavItem className="float-right">
                        <NavLink className={`${hoverStyle}`} href="portfolio">Portfolio</NavLink>
                    </NavItem>
                </Nav>
                <Icons />
            </div>

            
        </div>
    );
};

export default Navbar;

