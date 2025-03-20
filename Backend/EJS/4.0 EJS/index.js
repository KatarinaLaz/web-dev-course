import express from "express";

const app = express();
const port = 3000;
const day = new Date();

var message;

function checkDay(req, res, next) {
    if (day.getDay() === 0 || day.getDay() === 6) {
        message = "the weekend, it's time to have fun"
      } else {
        message = "a weekday, it's time to work hard"
      }
    next();
}

app.use(checkDay);

app.get("/", (req, res) => {
  res.render("index.ejs", // File that we want to render on screen
    { text: message } // JS Object for passing over properties (key,value pair)
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
