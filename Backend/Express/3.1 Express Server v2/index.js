import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => { //3000 - this is the port / () => this is the callback that will be triggered as soon as our app starts listening to port 3000 (as soon as it's set up)
    console.log(`The server is running on port ${port}.`);
})

// Start server with the node command: node index.js