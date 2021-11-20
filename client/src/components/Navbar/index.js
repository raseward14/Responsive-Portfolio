import "./style.css";
import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

import Icons from "../Icons";

function Navbar() {
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
    return (
        <div className='dropdown1'>
            <div className='menu-button' onClick={hamburgerFunction}>
                <div className='menu-button_burger'></div>
            </div>
            <div id='navMenu' className="navbar-content">
                <Nav className="nav-bar-main">
                    <NavItem>
                        <NavLink href="/" active>Home</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>

                    <NavItem className="float-right">
                        <NavLink href="/contact">Contact</NavLink>
                    </NavItem>

                    <NavItem className="float-right">
                        <NavLink href="/portfolio">Portfolio</NavLink>
                    </NavItem>
                </Nav>
                <Icons />
            </div>

            
        </div>
    );
};

export default Navbar;

