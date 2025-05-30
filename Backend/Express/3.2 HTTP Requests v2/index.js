import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders) // prints the request raw headers in he console
    res.send("Hello, Wolrd!"); // send back a response (in this case a piece of text)
});

app.get("/contact", (req, res) => {
    res.send("View Contacts!");
});

app.get("/about", (req, res) => {
    res.send("About Us");
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}.`);
});

// Start server with the node command: node index.js
// With "node index.js" we have to stop and restart the server every time we make a change
// To get around that we can run the server with "nodemon index.js" instead
// Nodemon will automatically restart the server when it detects a change after a page refresh, so no need to do it manually

// use NODEMON INDEX.JS from now on