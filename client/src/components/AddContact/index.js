import React, { useState } from 'react';
import { Input, FormBtn, TextArea } from '../Form';
import * as contactAPIFunctions from '../../utils'
import './style.css';
function AddContact() {
    const [formObject, setFormObject] = useState({});
    const [buttonText, setButtonText] = useState('Submit');
    // use history to redirect back home after submit -- not working
    // let history = useHistory();

    return(
        <>
        </>
    );
};
export default AddContact;