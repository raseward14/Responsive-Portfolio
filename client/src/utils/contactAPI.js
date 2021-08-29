import axios from "axios";

// save a contact
const saveContact = (contactData) => {
    console.log('contact saved')
    return axios.post("/api/contact", contactData);
};

export { saveContact };