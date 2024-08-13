// Custome middleware

import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {                // Our custom middleware
  console.log("Request method: ", req.method);
  console.log("Request url: ", req.url);
  next()                                         // We need to use next() to tell the middleware to go to the next step in te request/response chain
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

