// Import necessary modules
const { hostName, userInfo } = require("./systemcheck");
const { checkWord, checkWords } = require("./spellcheck");
const chalk = require("chalk");

function run() {
  // Log the hostname and greet the username
  const hostname = hostName();
  const user = userInfo().username;
  console.log(`Hostname: ${hostname}`);
  console.log(`Hello, ${user}!`);

  // Check for additional arguments to spellcheck
  const args = process.argv.slice(2).join(" ");
  if (args) {
    checkWords(args);
  } else {
    console.log("No sentence provided for spell checking.");
  }
}

// Execute the run function
run();




/*
const { checkWord, checkWords } = require("./spellcheck.js");

// Define a function to run the appropriate spell check function based on the command line arguments
function run() {
    const command = process.argv[2];
    const wordOrSentence = process.argv[3];
    const locale = process.argv[4] || "en-US"; // Default locale to en-US if not provided

    if (command === "checkword") {
        checkWord(wordOrSentence, locale);
    } else if (command === "checkwords") {
        checkWords(wordOrSentence, locale);
    } else {
        console.log("Be sure to use npm run checkword or npm run checkwords");
    }
}

// Run the program
run();

*/



/*

1. Create a new npm project
2. Create a new npm project called spell-checker with an entry point of index.js
3. Write a program in the file systemcheck.js that returns the hostname and userInfo username. Then console log the results of the functions. Finally, export the functions:


//output:
{
  uid: -1,
  gid: -1,
  username: 'niki_',
  homedir: 'C:\\Users\\niki_',
  shell: null
}

4. Set up the program so it runs with the command:

npm run oscheck

//package.json
{
  "name": "spell-checker",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "oscheck": "node systemcheck.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

5. Look up the package simple-spellchecker - is it a popular package? Is it maintained? What else can you learn about it?

Yes it's popular.
It was updated 3 years ago. This means the package is not being actively maintained.
There are 6208 weekly downloads. That's very high.
There are no issues or pull requests, and the overall package size is small.



5. Add an npm package to your project and use it


6. Create a new file, spellcheck.js, in the same project.
New-Item spellcheck.js -ItemType file


7. How do you install the package simple-spellchecker?
npm install simple-spellchecker
add .gitignore
index.js as entry point
Create a spell Checking script
spellcheck.js

update package.json Scripts




8. How can you be sure you install version 1?
click on link `11 Versions`. There are versions dating back to 5 years ago. 1.0.0.
npm i simple-spellchecker@1.0.0


9. How can you confirm the package has been installed?
You can confirm that this worked by seeing that you have the following:
A new folder, node_modules/. Inside this folder is the spellchecker folder (The package you just installed.)
spellchecker require other folders. These additional packages are often referred to as dependencies.
A new file called package-lock.json.
The package-lock.json file contains more detailed information about the installed packages and their dependencies. It is automatically generated and updated; you never need to edit it.
package.json has a new field, dependencies.

{
  "name": "lesson",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "lolcats": "^2.0.1"
  }
}


//By default, when you run npm install some-package it will install the latest version. However, the latest version may not be compatible with your system or other packages. When you tried to run your code, you probably ran into an error.

In this course (or any tutorial or book), it is best to use the instructional material's version. Tech and code change frequently, and there can be breaking changes or other updates that won't work as expected until the entire lesson/book has been updated, making learning a more frustrating experience. Once you've completed the lesson, you can try the latest version.


10. How do you set up simple-spellchecker so you can use it in your project?
npm i simple-spellchecker@1.0.0
require the module

And then require the module, get a Dictionary object and invoke their methods.

var SpellChecker = require('simple-spellchecker');
SpellChecker.getDictionary("fr-FR", function(err, dictionary) {
    if(!err) {
        var misspelled = ! dictionary.spellCheck('maisonn');
        if(misspelled) {
            var suggestions = dictionary.getSuggestions('maisonn');
        }
    }
});   

const SpellChecker = require("simple-spellchecker");

11. Set up this program so that you can type npm run checkword WORD, and it will spell check the word for you (where WORD represents any word you want to check?) from the index.js file.



Look up the package chalk - is it a popular package? Is it maintained? What else can you learn about it?

Add the package chalk to your project.

Using the documentation, what does chalk do?

Make a new file, ui.js

It's essential to separate the concerns. The functionality for checking the spelling of words is different than changing the text color. You might want to use the text color changes in your app's systemcheck.js file or other parts. If you build chalk's functionality inside the spellcheck functions, you'd have to rewrite it for any additional files/functions.

Set up chalk in the ui.js file.
Set up a function called error that will print things in bold red.
Set up a second function called warning that will print things in the color #FFA500 (orangy color).
export the two functions.
import the functions into the spellcheck.js file.

*/
