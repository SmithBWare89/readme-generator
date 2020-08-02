const inquirer = require('inquirer');
const cp = require('child_process');

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
            if (!confirm.openConfirm) {
                return console.log('Your file is in the dist folder.');
            }
            else {
                cp.exec('"dist/test-readme.md"', (err, stdout, stderr) => {
                    if (err) throw err;
                    console.log('Success! Your file will open!');
                });
            };
        })
}

module.exports = openFilePrompt;