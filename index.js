// Inquirer Package
const inquirer = require("inquirer");
// questions for user
const { promptUser, projectQuestions } = require('./utils/questions');
// markdown generator
const generateMarkdown = require('./utils/generateMarkdown');

// function call to initialize program
(async () => {
    try{
        const userInfo = await promptUser();
        const projectFeatures = await projectQuestions(userInfo);
        // const generatedMarkdown = await generateMarkdown(projectFeatures);
        // console.log(generatedMarkdown)
        // Write information to file
        // Prompt user to execute file
    } catch (err) {
        console.log(err);
    }
})();

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }


// init();