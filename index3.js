import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var band;

function bandName(req, res, next) {
  band = `${req.body.street} ${req.body.pet}`
  next();
}

function logger(req, res, next) {
  console.log(`Request url: ${req.url}`);
  console.log(`Request method: ${req.method}`);
  next(); // goes to the next middleware or to the next req/res step if there is no next middleware (order of middleware is important)
}

app.use(logger);

app.use(bodyParser.urlencoded({extended: true}));

// Must parse body before we can read it with bandName

app.use(bandName);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h2>Your band name is <i>${band}</i></h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
