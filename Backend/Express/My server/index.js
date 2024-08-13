// netstat -ano | findstr "LISTENING" => this command checks for all ports that the server is listening to (| is called the "pipe symbol")
// STEPS TO CLOSE THE PORT LISTENER IF WE CAN'T FIND WHERE OUT SERVER IS RUNNING:
//          1. netstat -ano | findstr :portNumber => replace "portNumber" with the port number - this returns a PID number that we need for step 2
//          2. taskkill /PID pid /F => replace "pid" with the PID number (/PID 6432 /F) - /F forces the termination on the process (/T regular termination)
//          3. run command in step 1 again to verify that it is closed
// IF YOU GET AN ERROR LIKE THIS USE DOUBLE // (taskkill //PID pid //F):

// ERROR: Invalid argument/option - 'C:/Program Files/Git/PID'.
// Type "TASKKILL /?" for usage.

// -----------

// req - request - comes from the browser, hits up a particular path
// res - response - what we send back as the response (res.send)

// -----------

// nodemon - automatically restarts the node application when a change in the code is detected -> to use it use "nodemon index.js" instead of "node index.js"
// npm i -g nodemon => -g means that we're installing this tool globally, not just for this one project, because we want all of our projects to be able to use this

import express from "express";
import path from "path";

const app = express();
const port = 3000;

// app.use(express.static("../../../Frontend/JS and DOM/Calculator")); => personal experiment - set the base url "/" to load the files from the specified folder

app.get("/", (req, res) => { // "/" is the path, it is the root of the endpoint => localhost:3000/
    console.log(req.rawHeaders); // rawHeaders - a list of key/value pairs that come from where the request originated
    res.send("<h1>Hello!</h1>");

});

app.get("/about", (req, res) => { // localhost:3000/about
    console.log(req.rawHeaders);
    res.send("<h1>About Me!</h1>")
});

app.get("/contact", (req, res) => { // localhost:3000/contact
    console.log(req.rawHeaders);
    res.send("<h1>Contact Details!</h1>")
});


app.listen(port, () => { // 3000 - the port => the location of the server that will listen to our requests
    console.log(`Server running on port ${port}`); // the callback function => this function will trigger as soon as our server is set up
});

