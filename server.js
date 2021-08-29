const express = require("express");
const mongoose = require("mongoose");
const cookieParse = require("cookie-parser");
const routes = require("./routes");

// const Contact = require('./models')

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParse());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfoliodb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// testing to see if we are connected to the mongodb
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB'))
  .on('error', (error) => {
    console.log('Your Error', error)
  });

// app.get('/add-contact', (req, res) => {
//   const contact = new Contact({
//     name: 'me',
//     email: 'me@me.com',
//     phone: 3034445555,
//     message: 'testing to see if we can post someone!'
//   });

//   contact.save()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});