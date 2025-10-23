const express = require("express");
const mongoose = require("mongoose");
const cookieParse = require("cookie-parser");
const cors = require('cors');
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParse());
// cross origin resource sharing
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfoliodb");

// troubleshooting
// https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database
// allows us to connect to our local db
// testing to see if we are connected to the mongodb
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB'))
  .on('error', (error) => {
    console.log('Your Error', error)
  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});