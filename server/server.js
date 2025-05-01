const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const cors = require("cors");

// Responsible for connection to the front end
app.use(cors());

// Ensures data is sent in the right format
app.use(bodyParser.json());
app.use(express.json());

// Define a Route
app.get("/", (req, res) => {
  const data = { message: "Hello from the API from our Student Portal!" };
  res.json(data.message);
  // res.send("<h1>Hello, ES6 Express Server Side!</h1>");
});

function calculateDaysBetweeDates(begin, end) {}

// write a function to
// find all images without alternate text
// and give them a red border

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("----------------------------------");
});
console.log("We are live...");
