// import React
import React, { useState, useEffect, useRef } from "react";
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
    const [buttonText, setButtonText] = useState('Submit');

    function handleClick(id) {

    };

    // resets component state to null on submit
    function clearState() {
         let nameInput = document.getElementById('name');
         let emailInput = document.getElementById('email');
         let phoneInput = document.getElementById('phone');
         let messageInput = document.getElementById('message');
         nameInput.value='';
         emailInput.value='';
         phoneInput.value='';
         messageInput.value='';
    }

    // updates component state when the user types in input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handlFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.phone || formObject.email) {
            contactAPIFunctions
                .saveContact({
                    name: formObject.name,
                    phone: formObject.phone,
                    email: formObject.email,
                    message: formObject.message
                })
                .then(() => {
                    clearState();
                    setButtonText('Thank You!');
                    document.getElementById("Button").disabled = true;
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
                    id='name'
                    onChange={handleInputChange}
                    name="name"
                    placeholder="name"
                />
                <Input
                    id='email'
                    onChange={handleInputChange}
                    name="email"
                    placeholder="email"
                />
                <Input
                    id='phone'
                    onChange={handleInputChange}
                    name="phone"
                    placeholder="phone"
                />
                <TextArea
                    id='message'
                    onChange={handleInputChange}
                    name="message"
                    placeholder="Leave a message!"
                />
                <FormBtn
                    id='Button'
                    disabled={!(formObject.name && formObject.message && (formObject.phone || formObject.email))}
                    onClick={handlFormSubmit}
                >{buttonText}</FormBtn>
            </section>
        </div>
    );
};

export default Contact;