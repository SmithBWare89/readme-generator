// // function to generate markdown for README

const generateMarkdown = (projectData, additionalFeatures) => {
return `# [${projectData.projectName}](http://www.github.com/${projectData.githubName}/${projectData.repoName})

## Description
${projectData.projectDescript}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Languages](#languages)
* [Contributing](#contributing)
* [Collaborator](#collaborators)
* [Tests](#test)

## Installation
${projectData.projectInstall}

## Usage
${projectData.usage}
${generateUsageMedia(additionalFeatures)}

## License
${generateLicense(projectData.licenses)}

## Languages
${generateLanguages(projectData.languages)}

## Contributing
${projectData.contribution}

${generateCollaborators(additionalFeatures)}
${generateThirdParty(additionalFeatures)}
${generateTutorial(additionalFeatures)}

## Test
  ${projectData.tests}

## Questions
All questions can be directed to [my email](${projectData.emailAddress}) or [github](https://www.github.com/${projectData.githubName}).
  `;
}

const generateUsageMedia = features => {
  const mediaItems = [];
  // If user would like to include media
  if (features.mediaConfirm) {
    // Create and push markdown for amount of items specified
    for (let i = 0; i < Number(features.mediaCount); i++) {
      mediaItems.push(`![Alt Text](Link or File Path)`);
    }
    // If there is more than 1 collaborator
    if (Number(features.mediaCount) > 1) {
      // Create a new line for each
      return `${mediaItems.join('\n')}`;
    }
    else {
      return `${mediaItems}`;
    }
  } else {
    return ``;
  }
}

const generateCollaborators = features => {
  // If there are collaborators
  if (features.collabConfirm) {
    const collabArray = [];
    // Create and push markdown into the array for number specified
    for (let i = 0; i < Number(features.collabTotal); i++) {
      collabArray.push(`- Name - [GitHub Name](GitHub Link)`);
    }
    // If there is mare than one collaborator
    if (Number(features.collabTotal) > 1){
      // Create a new line for each collaborator
      return `## Collaborators` + '\n' + `${collabArray.join('\n')}`;
    }
    // Else create only the one
    else {
      return `## Collaborators` + '\n' + `${collabArray}`;
    }
  } else {
    return '';
  }
}

const generateThirdParty = features => {
  // If there were no collaborators but there are 3rd Party Assets
  if (!features.collabConfirm && features.thirdPartyConfirm){
    const thirdPartyArray = [];
    // Create and push markdown into the array based on number of assets specified
    for (let i = 0; i < Number(features.thirdPartyTotal); i++){
      thirdPartyArray.push(`- [Third Party Asset Name](Link or File Path)`);
    }
    // If number of assets > 1
    if (Number(features.thirdPartyTotal > 1)){
      // Create a new line for each asset
      return `## Collaborators` + '\n' + `${thirdPartyArray.join(`\n`)}`;
    } else {
      // Else create only the one
      return `## Collaborators` + '\n' + `${thirdPartyArray}`;
    }
  } 
  // If there are collaborators and assets
  else if (features.collabConfirm && features.thirdPartyConfirm) {
    const thirdPartyArray = [];
    // Create and push markdown into the array based on number of assets specified
    for (let i = 0; i < Number(features.thirdPartyTotal); i++){
      thirdPartyArray.push(`- [Third Party Asset Name](Link or File Path)`);
    }
        // If number of assets > 1
    if (Number(features.thirdPartyTotal > 1)){
      // Create a new line for each asset
      return `${thirdPartyArray.join(`\n`)}`;
    } else {
      // Create only the one
      return `${thirdPartyArray}`;
    }
  }
}

const generateTutorial = features => {
  // If there are no collaborators/3rd Party Assets & They Used Tutorials
  if (!(features.collabConfirm || features.thirdPartyConfirm) && features.tutorialConfirm){
    const tutorialArray = [];
    // Push the markdown into the array for the specified number of tutorials
    for (let i = 0; i < Number(features.tutorialTotal); i++){
      tutorialArray.push(`- [Tutorial Name](Link or File Path)`);
    }
    // If the number of tutorials is > 1
    if (Number(features.thirdPartyTotal > 1)){
    // Return markdown with each item from the array on a new line
    return `## Collaborators` + '\n' + `${tutorialArray.join(`\n`)}`;
    } else {
      // Else return only the one item without a new line
      return `## Collaborators
      ${tutorialArray}`;
    }
  }
  // If there were collaborators or 3rd party assets 
  else if ((features.collabConfirm || features.thirdPartyConfirm) && features.tutorialConfirm) {
    const tutorialArray = [];
    // Create and push markdown into array based on number of tutorials
    for (let i = 0; i < Number(features.tutorialTotal); i++){
      tutorialArray.push(`- [Tutorial Name](Link or File Path)`);
    }
    // If the number of tutorials is > 1
    if (Number(features.thirdPartyTotal > 1)){
      // Return markdown with each item from the array on a new line
      return `${tutorialArray.join(`\n`)}`;
      } else {
        // Else return only the one item without a new line
        return `${tutorialArray}`;
      }
  }
  else if (!(features.collabConfirm && features.thirdPartyConfirm && features.tutorialConfirm)) {
    return `## Collaborators` + '\n' + `There were no other contributors to this project.`
  }
}

const generateLicense = license => {
  if (license === 'MIT') return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  if (license === 'GNU GPLv3') return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  if (license === 'Other') return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
}

const generateLanguages = languages => {
  const languageArray = [];
  if (languages.indexOf('HTML-5') > -1) languageArray.push(`![HTML-5 Badge](https://img.shields.io/badge/Language-HTML--5-blue)`);
  if (languages.indexOf('CSS') > -1) languageArray.push(`![CSS Badge](https://img.shields.io/badge/Language-CSS-blue)`);
  if (languages.indexOf('jQuery') > -1) languageArray.push(`![jQuery Badge](https://img.shields.io/badge/Language-jQuery-blue)`);
  if (languages.indexOf('Javascript') > -1) languageArray.push(`![Javascript Badge](https://img.shields.io/badge/Language-Javascript-blue)`);
  if (languages.indexOf('Node') > -1) languageArray.push(`![Node Badge](https://img.shields.io/badge/Language-Node-blue)`);
  if (languages.indexOf('PHP') > -1) languageArray.push(`![PHP Badge](https://img.shields.io/badge/Language-PHP-blue)`);
  return languageArray.length > 0 ? languageArray.join('\n') : languageArray
}

module.exports = generateMarkdown;