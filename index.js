// Inquirer Package
const inquirer = require("inquirer");
// questions for user
const {promptUser, additionalFeatures} = require('./utils/questions');
// markdown generator
const generateMarkdown = require('./utils/generateMarkdown');

// function call to initialize program
(async () => {
    try{
        const userInfo = await promptUser();
        const projectFeatures = await additionalFeatures();
        const generatedMarkdown = await generateMarkdown(userInfo ,projectFeatures);
        // Write information to file
        // Prompt user to execute file
    } catch (err) {
        console.log(err);
    }
})();