import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var band;

var __dirname = dirname(fileURLToPath(import.meta.url));

function bandName(req, res, next) {                 // WAY 1: Use middleware to declare the band name
  band = `${req.body.street}${req.body.pet}✌️`;
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bandName);    // part of WAY 1

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  // var band = req.body.street + req.body.pet + "✌️";        // WAY 2: Create a String and add it into the response
  res.send(`<h1>Your band name is:</h1><h2>${band}</h2>`);
  // res.send(`<h1>Your band name is:</h1><h2>${req.body.street}${req.body.pet}✌️</h2>`);   // WAY 3: directly write the string in the response
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
