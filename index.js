// questions for user
const {promptUser, additionalFeatures} = require('./utils/questions');
// markdown generator
const generateMarkdown = require('./utils/generateMarkdown');
// create the file directory and write to the file
const {writeFile, makeDirectory} = require('./utils/writeFile');
// prompt user to open file
const openFilePrompt = require('./utils/executeFile');

// function call to initialize program
(async () => {
    try{
        // Accept project information
        const userInfo = await promptUser();
        // Accept additional readme features questions
        const projectFeatures = await additionalFeatures();
        // Generate readme markdown
        const generatedMarkdown = await generateMarkdown(userInfo ,projectFeatures);
        // Make the file directory
        const makeReadmeDirectory = await makeDirectory();
        // Create the readme file using the markdown
        const writeReadMeFile = await writeFile(generatedMarkdown);
        // Ask the user if they'd like to open the file
        const promptFileOpen = await openFilePrompt();
    } catch (err) {
        console.log(err);
    }
})();
  