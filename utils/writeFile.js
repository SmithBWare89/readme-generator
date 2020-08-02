// Use generated markdown to write a readme file
const fs = require('fs');

const makeDirectory = () => {
    return new Promise((resolve, reject) => {
        fs.mkdir('./dist', {recursive: true}, (err, path) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your file directory has been created!'
            });
        });
    });
};

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/readme.md', fileContent, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your readme file has been created!'
            });
        })
    })
};

module.exports = {writeFile, makeDirectory};