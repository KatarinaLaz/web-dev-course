const fs = require("fs")

// we will use the .writeFile function to create a file - if we don't specify a file path, it will create it in this folder
// fs.writeFile(file, data, [options], callback);
// -file => name (ant path) of the file
// -data - the data that we want to write
// -callback - we can use it to return and throw an error if there is one, or confirm that the file is saved if there isn't one

const message = "Hello from Angela! Hello from NodeJS!"

fs.writeFile("message.txt", message, (err) => {
    if (err) throw err;
    console.log("The file has been saved");
})

fs.readFile('message.txt', 'utf8', (err, data) => { //we need to specify the encoding (utf8 in this case) or a raw buffer will be returned
    if (err) throw err;
    console.log(data);
  }); 