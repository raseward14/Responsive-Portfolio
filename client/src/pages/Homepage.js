// import React
import React, { useState, useEffect } from "react";
// import components
import Nav from "../components/Navbar/index";

// import style
import "./style.css";

function Homepage() {
    return (
        <>
            <aside><Nav /></aside>
            <h1 className="heading">Home</h1>
            <section>Hi! I'm Richard, and I build stuff.</section>
        </>
    );
};

export default Homepage;