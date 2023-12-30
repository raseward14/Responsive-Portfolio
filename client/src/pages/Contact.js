// import React
import React from "react";
// import style
import "./style.css";
// import components
import Nav from "../components/Navbar/index";
import AddContact from "../components/AddContact";
import LetsConnect from "../components/LetsConnect";

function Contact({ backgroundColor }) {
    return (
        <>
            <aside><Nav backgroundColor={backgroundColor} /></aside>
            <h1 className="heading">Contact</h1>
            <AddContact backgroundColor={backgroundColor} />
            <LetsConnect />
        </>
    );
};

export default Contact;