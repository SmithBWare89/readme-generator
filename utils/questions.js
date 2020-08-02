const inquirer = require("inquirer");

const promptUser = () => {
    console.log(`
    =================
    Required Information
    =================
    `);
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'userName',
                message: 'What is your name?',
                validate: userInput => !!(userInput.trim() || console.log('Please enter your name.'))
            },
            {
                type: 'input',
                name: 'githubName',
                message: 'What is your Github username',
                validate: userInput => !!(userInput.trim() || console.log('Please enter your Github username.'))
            },
            {
                type: 'email',
                name: 'emailAddress',
                message: 'What is your email address',
                validate: userInput => !!(userInput.trim() || console.log('Please enter contribution information.'))
            },
            {
                type: 'input',
                name: 'projectName',
                message: 'What is the name of your project?',
                validate: userInput => !!(userInput.trim() || console.log('Please enter a project name.'))
            },
            {
                type: 'input',
                name: 'repoName',
                message: 'What is the name of the repository?',
                validate: userInput => !!(userInput.trim() || console.log('Please enter a project name.'))
            },
            {
                type: 'input',
                name: 'projectDescript',
                message: 'Please provide a description of your project.',
                validate: userInput => !!(userInput.trim() || console.log('Please enter a project description.'))
            },
            {
                type: 'input',
                name: 'projectInstall',
                message: 'Please provide any instructions on how to install your project.',
                validate: userInput => !!(userInput.trim() || console.log('Please enter installation instructions or N/A.'))
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide details on how to use your project.',
                validate: userInput => !!(userInput.trim() || console.log('Please enter installation instructions or N/A.'))
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'How can someone contribute to this project in the future?',
                validate: userInput => !!(userInput.trim() || console.log('Please enter contribution instructions.'))

            },
            {
                type: 'input',
                name: 'tests',
                message: 'Please detail any tests that can be used for your application or package.',
                validate: userInput => !!(userInput.trim() || console.log('Please enter test instructions or N/A.'))
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'Please select the programming languages used to develop this project:',
                choices: ['HTML-5', 'CSS', 'Javascript', 'jQuery', 'Node', 'PHP']
            },
            {
                type: 'list',
                name: 'licenses',
                message: 'Which license would you like to apply to this project?',
                choices: ['MIT', 'GNU GPLv3', 'Other'],
                default: 'MIT'
            }
        ])
    }

const additionalFeatures = () => {
    console.log(`
    =================
    Optional Features
    =================
    `);
    return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'mediaConfirm',
                message: 'Would you like to add any images or gifs to your readme?',
                default: false
            },
            {
                type: 'input',
                name: 'mediaCount',
                when: ({mediaConfirm}) => mediaConfirm,
                message: 'Please enter a total number of images/gifs you would like to include:',
                validate: userInput => !!(Number(userInput) || console.log(`<- That's not a number!`))
            },
            {
                type: 'confirm',
                name: 'collabConfirm',
                message: 'Did anyone contribute to this project other than yourself?',
                default: false
            },
            {
                type: 'input',
                name: 'collabTotal',
                when: ({collabConfirm}) => collabConfirm,
                message: 'How many other people contributed to this project? (excluding yourself)',
                validate: userInput => !!(Number(userInput) || console.log(`<- That's not a number!`))
            },
            {
                type: 'confirm',
                name: 'thirdPartyConfirm',
                message: 'Were there any third party assets that require attribution for this project?',
                default: false
            },
            {
                type: 'input',
                name: 'thirdPartyTotal',
                when: ({thirdPartyConfirm}) => thirdPartyConfirm,
                message: 'How many third party assets were used for this project?',
                validate: userInput => !!(Number(userInput) || console.log(`<- That's not a number!`))
            },
            {
                type: 'confirm',
                name: 'tutorialConfirm',
                message: 'Did you use any tutorials to complete this project?',
                default: false
            },
            {
                type: 'input',
                name: 'tutorialTotal',
                when: ({tutorialConfirm}) => tutorialConfirm,
                message: 'How many tutorials did you use to complete this project?',
                validate: userInput => !!(Number(userInput) || console.log(`<- That's not a number!`))
            },
        ])
}

module.exports = {promptUser, additionalFeatures};