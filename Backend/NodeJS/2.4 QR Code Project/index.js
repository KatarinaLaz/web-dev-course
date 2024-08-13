/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";

const question = {
    name: "url",
    message: "What's out favorite website?"
}

  inquirer
  .prompt([
    question
  ])
  .then((answers) => {
    var qr_svg = qr.image(answers.url);
    qr_svg.pipe(fs.createWriteStream('website.png'));

    fs.writeFile("myUrl.txt", answers.url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });