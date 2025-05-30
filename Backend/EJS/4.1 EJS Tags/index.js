import express from 'express'
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/**
 *  <%= variable %>                 JS Output                 - interpreted as JS and creates an output
 *  <% console.log("Hello") %>      JS Execute                - executable JS code inside the HTML - doesn't give output, it's like Void
 *  <%- <h1>Hello</h1> %>           Render HTML               - everything inside the tag is interpreted as HTML
 *  <%%  %%>                        Show <% or %>             - a way to actually write <% or %> without it being interpreted as tags
 *  <%# This is a comment %>        stop Execution            - this is how to write comments inside EJS
 *  <%- include("<EJS FILE>") %>    Insert another EJS file   - for reusing parts like header and footer (e.g. 'include("<footer.ejs>")')
 */