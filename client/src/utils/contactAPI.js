import axios from "axios";

// save a contact
const saveContact = (contactData) => {
    return axios.post("/api/contact", contactData);
};

export { saveContact };