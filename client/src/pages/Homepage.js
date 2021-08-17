// import React
import React, { useState, useEffect } from "react";
// import components
import Nav from "../components/Navbar/index";
// import style
import "./style.css";

function Homepage() {

    return (
        <div className="themed-container">
            <aside><Nav /> and useful icons and links</aside>
            <h1 className="heading">Home</h1>
            <section>main content</section>
        </div>
    );
};

export default Homepage;