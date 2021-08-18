const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter your name",
  },
  email: {
    type: String,
    trim: true,
  },
  phone: {
    type: Number,
  },
  message: {
    type: String,
    trim: true,
    required: "Please enter a brief message, and your preferred contact method.",
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;