const testFeatures = {
    mediaConfirm: true,
    mediaCount: '3',
    collabConfirm: true,
    collabTotal: '3',
    thirdPartyConfirm: true,
    thirdPartyTotal: '1',
    tutorialConfirm: true,
    tutorialTotal: '1'
  }

const testInfo = {
    userName: 'Lernantino',
    githubName: 'Lernantino',
    emailAddress: 'Lernantino@gmail.com',
    projectName: 'Run Buddy',
    repoName: 'run-buddy',
    projectDescript: 'A project designed to encourage you to run!',
    projectInstall: 'Open the website at the top of the file.',
    contribution: 'Create a pull request on my repository.',
    usage: 'Use the sign up sheet to request a personal run buddy!',
    tests: 'None',
    languages: [ 'HTML-5', 'CSS', 'Javascript' ],
    licenses: 'MIT'
  }

// markdown generator
const generateMarkdown = require('./utils/generateMarkdown');
// create the file directory and write to the file
const {writeFile, makeDirectory} = require('./testUtils/testWriteFile');
// prompt user to open file
const openFilePrompt = require('./testUtils/testOpenFile');

// function call to initialize program
(async () => {
    try{
        console.log('This test will accept test data already in the file, print the sample markdown, and generate a test readme file.');
        console.log(testInfo);
        console.log(testFeatures);
        // Generate readme markdown
        const generatedMarkdown = await generateMarkdown(testInfo ,testFeatures);
        console.log(generatedMarkdown);
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