// import React
import React from "react";
import { useHistory } from 'react-router-dom';
// import style
import "./style.css";
// import components
import Nav from "../components/Navbar/index";
import AddContact from "../components/AddContact";
import LetsConnect from "../components/LetsConnect";
// import { Col, Row, Card } from 'reactstrap';

function Contact() {
    let history = useHistory();
    const goBackHanler = () => {
        history.goBack();
    };
    return (
        <>
            <aside><Nav /></aside>
            <h1 className="heading">Contact</h1>
            <AddContact />
            <LetsConnect />
        </>
    );
};

export default Contact;