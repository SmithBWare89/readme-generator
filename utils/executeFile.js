const inquirer = require('inquirer');

const openFilePrompt = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'openConfirm',
                message: 'Would you like to open the generated readme file?',
                default: true
            }
        ])
        .then(confirm => executeFile(confirm))
}

const cp = require('child_process');


const executeFile = confirm => {
    if (confirm) {    
        cp.exec('./dist/readme.md', (err, stdout, stderr) => {
            if (err) throw err;
            console.log('Your readme will be opened shortly!');
            console.log(stdout);
        });
    } else {
        console.log('Your file is in the dist folder');
    }
}

module.exports = openFilePrompt;