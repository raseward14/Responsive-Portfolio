// import React
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
// import style
import "./style.css";
// import components
import Nav from "../components/Navbar/index";
import { Input, FormBtn, TextArea } from "../components/Form";
// import { Col, Row, Card } from 'reactstrap';
// import API functions
import * as contactAPIFunctions from "../utils/contactAPI";
import axios from "axios";

function Contact() {
    const [formObject, setFormObject] = useState({});
    const [buttonText, setButtonText] = useState('Submit');
    // let history = useHistory();

    var data = JSON.stringify({
        "name": "Test Name",
        "description": "New Task Description",
        "assignees": [
            14917287
        ],
        "tags": [
            "contact"
        ],
        "status": "To do",
        "priority": null,
        "due_date": 1508369194377,
        "due_date_time": false,
        "time_estimate": 8640000,
        "start_date": 1567780450202,
        "start_date_time": false,
        "notify_all": true,
        "parent": null,
        "links_to": null,
        "check_required_custom_fields": true,
        "custom_fields": [
            {
                "id": "041c6ec7-59d6-45c7-9cad-67f54d677be4",
                "value": "raseward14@gmail.com"
            },
            {
                "id": "546bbe4b-2fa6-49e9-bb7c-3c111aec15eb",
                "value": "This is my message!"
            },
            {
                "id": "865c7fe2-d4c9-4464-9d71-cc4d190eab98",
                "value": "+1 970 430 8559"
            }
        ]
    });

    function postAxios(event) {
        event.preventDefault();
        var config = {
            method: 'post',
            url: 'https://api.clickup.com/api/v2/list/116273262/task',
            headers: {
                'Authorization': 'pk_14917287_C01GVS3FA1OD9YG1CWV64YI515GS09QD',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': '',
                'Origin': 'http://localhost:3000'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // resets component state to null on submit
    function clearState() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
        setButtonText('Thank You!');
        document.getElementById("Button").disabled = true;
    };

    // updates component state when the user types in input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    };



    function postTask(event) {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "pk_14917287_C01GVS3FA1OD9YG1CWV64YI515GS09QD");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": formObject.name,
            "description": "New Task Description",
            "assignees": [
                14917287
            ],
            "tags": [
                "contact"
            ],
            "status": "To do",
            "priority": null,
            "due_date": 1508369194377,
            "due_date_time": false,
            "time_estimate": 8640000,
            "start_date": 1567780450202,
            "start_date_time": false,
            "notify_all": true,
            "parent": null,
            "links_to": null,
            "check_required_custom_fields": true,
            "custom_fields": [
                {
                    "id": "041c6ec7-59d6-45c7-9cad-67f54d677be4",
                    "value": formObject.email
                },
                {
                    "id": "546bbe4b-2fa6-49e9-bb7c-3c111aec15eb",
                    "value": formObject.message
                },
                {
                    "id": "865c7fe2-d4c9-4464-9d71-cc4d190eab98",
                    "value": `+1 ${formObject.phone}`
                }
            ]
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            mode: 'no-cors',
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.clickup.com/api/v2/list/116273262/task", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };

    function handleFormSubmit(event) {
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
                })
                .catch((err) => console.log(err));
        };
    };

    return (
        <>
            <aside><Nav /></aside>
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
                    onClick={(event) => {
                        handleFormSubmit(event);
                        // postTask(event);
                        postAxios(event);
                    }}
                >{buttonText}</FormBtn>
            </section>
        </>
    );
};

export default Contact;