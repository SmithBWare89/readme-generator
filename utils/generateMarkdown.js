// // function to generate markdown for README


// function generateMarkdown(data) {
//   // const filteredData = data.filter(({features}) => features)
//   // console.log(filteredData);

//   return `
//     # ![${data.projectName}](http://www.github.com/${data.githubName}/${data.repoName})

//     ## Description
//     ${data.projectDescript}

//     ## Table of Contents
//     ${generateTOC(data.features)}

//     ## Installation
//     ${data.projectInstall}

//     ## Usage
//     ${}
// // `;
// }

// function generateTOC(features) {
//   const contentsArray = [];
//   // If any of these have values then push the text into the array
//   features.mediaConfirm ? contentsArray.push(`* [Media](#media)`) : false;
//   features.collabConfirm ? contentsArray.push(`* [Collaborators](#Collaborators)`) : false;
//   features.thirdPartyConfirm ? contentsArray.push(`* [Third Party Assets](#thirdparty)`) : false;
//   features.tutorialConfirm ? contentsArray.push(`* [Tutorials Used](#tutorial)`) : false;

//   // Give each value in the array a variable name
//   [media, collab, thirdParty, tutorial] = contentsArray;

//   // Evaluate if the variable has value
//   // If it has value then return it otherwise make it an empty space then trim the empty space
//   return `* [Installation](#installation)
//     * [Usage](#usage)
//     * [License](#license)
//     * [Credits](#credits)
//     ${media ? media : ''}  
//     ${collab ? collab : ''} 
//     ${thirdParty ? thirdParty : ''} 
//     ${tutorial ? tutorial : ''}`.trim();
// }

// module.exports = generateMarkdown;