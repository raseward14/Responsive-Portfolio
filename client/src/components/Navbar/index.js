import "./style.css";
import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

function Navbar() {

    return (

        <div>
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
        </div>
    );
};

export default Navbar;

