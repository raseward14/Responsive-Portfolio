import axios from "axios";

// get all contacts
const getContacts = () => {
  return axios.get("/api/contact");
};
// save a contact
const saveContact = (contactData) => {
  console.log('contact saved')
  return axios.post("/api/contact", contactData);
};
// delete a contact
const deleteContact = (id) => {
  return axios.delete("/api/contact/" + id)
};

export { saveContact, getContacts, deleteContact };