const inquirer = require('inquirer');
const cp = require('child_process');
const fs = require('fs');

const openFilePrompt = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'openConfirm',
                message: 'Would you like to open the generated readme file?',
                default: false
            }
        ])
        .then(confirm => {    
            if (confirm) {

                cp.exec('"dist/readme.md"', (err, stdout, stderr) => {
                    if (err) throw err;
                    console.log('Success! Your file will open!');
                    console.log(stdout);
                });
            }
            else {
                return console.log('Your file is in the dist folder');
            };
        })
}

module.exports = openFilePrompt;