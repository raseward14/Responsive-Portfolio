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
}
// post contact to clickup
const postClickUp = ({ name, phone, email, message }) => {
  var data = JSON.stringify({
    "name": name,
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
        "value": email
      },
      {
        "id": "546bbe4b-2fa6-49e9-bb7c-3c111aec15eb",
        "value": message
      },
      {
        "id": "865c7fe2-d4c9-4464-9d71-cc4d190eab98",
        "value": `+1 ${phone}`
      }
    ]
  });
  var config = {
    method: 'post',
    url: 'https://api.clickup.com/api/v2/list/116273262/task',
    headers: {
      'Authorization': 'pk_14917287_C01GVS3FA1OD9YG1CWV64YI515GS09QD',
      'Content-Type': 'application/json'
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

export { saveContact, getContacts, deleteContact };