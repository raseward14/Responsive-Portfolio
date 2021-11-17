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
        document.getElementById('menu-button').classList.toggle('show')
    }
    return (

        <div>
            <div className='menu-button'>
                <div className='menu-button_burger' onClick={()=> hamburgerFunction}></div>
            </div>
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
    );
};

export default Navbar;

