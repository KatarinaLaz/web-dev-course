import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let numberOfLetters;

app.use(bodyParser.urlencoded({ extended: true }));

function count(req, res, next) {
  let name = req.body.fName + req.body.lName;
  numberOfLetters = name.length;
  next();
}

app.use(count);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  res.render("index.ejs", {numberOfLetters: numberOfLetters});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});