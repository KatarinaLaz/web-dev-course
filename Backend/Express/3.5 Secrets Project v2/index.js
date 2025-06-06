//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = "12345";

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(req.body.password == password) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
        //This can also be written as:
        // res.redirect("/");
    }
    
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});