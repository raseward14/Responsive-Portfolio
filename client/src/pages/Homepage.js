// import React
import React from "react";
// import components
import Nav from "../components/Navbar/index";

// import style
import "./style.css";

function Homepage() {
    return (
        <div className='container'>
            <aside><Nav /></aside>
            <h1 className="heading">Home</h1>
            <section className='home'>Hi! I'm Richard, and I build stuff.</section>
        </div>
    );
};

export default Homepage;