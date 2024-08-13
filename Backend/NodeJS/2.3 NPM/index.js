// NPM - node package manager - resources written for node
// npm init - brings up the initialization utility which helps us create our configuration file called package.json
//  npm install <something> - we can use this to install a package from npmjs.com (there is ashothand "npm i <something>")
// We can install multiple packages with spaces between each one => npm i <something> <something> <something>

import generateName from "sillyname";
import { randomSuperhero } from "superheroes"

var sillyName = generateName();

console.log("My name is " + sillyName + ".");
console.log(randomSuperhero());