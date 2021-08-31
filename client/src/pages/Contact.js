// import React
import React, { useState, useEffect } from "react";
// import style
import "./style.css";
// import components
import Nav from "../components/Navbar/index";
import { Input, FormBtn, TextArea } from "../components/Form";
import { Col, Row, Card } from 'reactstrap';
// import API functions
import * as contactAPIFunctions from "../utils/contactAPI";

function Contact() {
    const [formObject, setFormObject] = useState({});

    function loadForm() {

    };

    function handleClick(id) {

    };

    function handlFormSubmit(event) {
        event.preventDefault();
        console.log('Here!')

        if (formObject.name 
            // && formObject.phone || formObject.email
            ) {
            contactAPIFunctions
                .saveContact({
                    name: formObject.name,
                    phone: formObject.phone,
                    email: formObject.email,
                    message: formObject.message
                })
                .then(() => {
                    loadForm();
                })
                .catch((err) => console.log(err));
        };
    };

    return (
        <div className="themed-container">
            <aside><Nav /> and useful icons and links</aside>
            <h1 className="heading">Contact</h1>
            <section>
                <Input 
                    name="name"
                    placeholder="Whats your name?"
                />
                <Input 
                    name="email"
                    placeholder="Whats your email address?"
                />
                <Input 
                    name="phone"
                    placeholder="Whats your phone number?"
                />
                <TextArea 
                    name="message"
                    placeholder="What brings you here?"
                />
                <FormBtn
                    disabled={!(formObject.name && formObject.message) && (formObject.phone || formObject.email)}
                    onClick={handlFormSubmit}
                >Submit</FormBtn>
            </section>
        </div>
    );
};

export default Contact;