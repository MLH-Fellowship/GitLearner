
const fs = require('fs');
const path = require('path');

module.exports = {

    // returns the directory base currently in
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd);
    },

    // returns true/false if directory exists
    directoryExists: (filePath) => {
        return fs.existsSync(filePath);
    },

    // create tutor folder
    createTutorDirectory: () => {
        fs.mkdirSync("./git-tutor");
    },
}