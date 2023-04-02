# ReadmeMaker

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This application was built for the purposes of creating a readme generator. This generator can allow you to create a quick and simple readme file by answering some prompts in the terminal. The application was created by using node.js, file system, and inquirer. The reason why I did this application was so I can have a method to create a readme file that was easy to do, quick, and mostly automated. I learned how to use node.js and third party libraries such as inquirer and file systme to create a prompt based application and using the prompts to write files based on the responses.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To install this application, you need clone the repository. To clone the repository, you go to the green button on the repository that says "< > Code". Then you can choose to copy either the https url or the ssh url if you have a ssh key. After you copy the link, then you go to your terminal on your computer and in the terminal, you change the current directory to the directory you want to place the cloned repository in and then you type "git clone" and paste the url. Finally, you hit enter and the repository will be on your machine.

## Usage

Since this is a terminal based application, there is not much in terms of how to use it. All you need to do is open the terminal in your code editor or machine and go to the index.js in the folder. Then type "node index" to start the prompts. You will see questions which you will have to type the responses for in the terminal and also there is a choices question for selecting the license you want to have in the README so you have to go to the answer you want via the up and down keys and hit the spacebar to select. Then hit the "enter" key to confirm your choice. After you answered all the questions, a "success" text line will appear to show that you have made the README. The newly created Readme will be only the name "READMEcopy.md" to allow a distinction between the created README and this README and also to not overwrite this README. So rename the file and take the README file and paste it into your own application for your use.

![Tutorial Video](Untitled_%20Mar%206%2C%202023%2012_21%20AM.webm)

## Credits

Inquirer- https://www.npmjs.com/package/inquirer

File System -https://nodejs.org/api/fs.html

## License

MIT
