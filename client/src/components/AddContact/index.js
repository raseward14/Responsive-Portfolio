import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, FormBtn, TextArea } from '../Form';
import * as contactAPIFunctions from '../../utils/contactAPI';
import './style.css';

function AddContact({ backgroundColor }) {
    const [formObject, setFormObject] = useState({});
    const [buttonText, setButtonText] = useState('Submit');
    // navigate replaces useHistory
    const navigate = useNavigate();

    const goBackHandler = () => {
        // redirect to homepage
        navigate('/');
    };

    // resets component state to null on submit
    function clearState() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
        setButtonText('Thank You!');
        document.getElementById("Button").disabled = true;
    };

    // good onchange syntax example https://reactgo.com/post-request-react-hooks/
    // updates component state when the user types in input field
    // more reading https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    };

    // POST HTTP request to post clickup task -- now works
    function postTask(event) {
        event.preventDefault();
        try {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "pk_14917287_C01GVS3FA1OD9YG1CWV64YI515GS09QD");
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");

            var raw = JSON.stringify({
                "name": formObject.name || 'unknown',
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
                    formObject.email ?
                        {
                            "id": "041c6ec7-59d6-45c7-9cad-67f54d677be4",
                            "value": formObject.email
                        } : {},
                    {
                        "id": "546bbe4b-2fa6-49e9-bb7c-3c111aec15eb",
                        "value": formObject.message
                    },
                    formObject.phone ?
                        {
                            "id": "865c7fe2-d4c9-4464-9d71-cc4d190eab98",
                            "value": `+1 ${formObject.phone}`
                        } : {}
                ]
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://api.clickup.com/api/v2/list/116273262/task", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error)
        }
    };

    async function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.phone || formObject.email) {
            try {
                // posts to my api
                await contactAPIFunctions.saveContact({
                    name: formObject.name,
                    phone: formObject.phone,
                    email: formObject.email,
                    message: formObject.message
                });

                //             const data = {
                //                 name: formObject.name,
                //                 description: "New Task Description",
                //                 assignees: [
                //                     14917287
                //                 ],
                //                 tags: [
                //                     "contact"
                //                 ],
                //                 status: "To do",
                //                 priority: null,
                //                 due_date: 1508369194377,
                //                 due_date_time: false,
                //                 time_estimate: 8640000,
                //                 start_date: 1567780450202,
                //                 start_date_time: false,
                //                 notify_all: true,
                //                 parent: null,
                //                 links_to: null,
                //                 check_required_custom_fields: true,
                //                 custom_fields: [
                //                     {
                //                         id: "041c6ec7-59d6-45c7-9cad-67f54d677be4",
                //                         value: formObject.email
                //                     },
                //                     {
                //                         id: "546bbe4b-2fa6-49e9-bb7c-3c111aec15eb",
                //                         value: formObject.message
                //                     },
                //                     {
                //                         id: "865c7fe2-d4c9-4464-9d71-cc4d190eab98",
                //                         value: `+1 ${formObject.phone}`
                //                     }
                //                 ]
                //             };

                // integromat webhook that posts a task to clickup - not needed since the clickup POST works now
                //             const options = {
                //                 method: 'POST',
                //                 headers: {
                //                     'Content-Type': 'application/json',
                //                 },
                //                 body: JSON.stringify(data)
                //             }
                //             let response = await fetch("https://hook.integromat.com/fbohq3cuw4xqkhys8gij8rcarvfxp2p5", options);
                //             let myContact = await response.text();
                //             console.log(myContact);

                clearState();
                // wait 2 seconds to show Thank You button, then navigate back home
                setTimeout(goBackHandler, 2000);
            } catch (error) {
                console.log(error);
            };
        };
    };

    return (
        <>
            <section className='contact-section'>
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
                        postTask(event);
                    }}
                    backgroundColor={backgroundColor}
                >{buttonText}</FormBtn>
            </section>
        </>
    );
};
export default AddContact;