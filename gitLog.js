const fileHelper = require("./helpers/file");
const lessonFinisher = require("./lessonManager");
const { clear } = require("console");
const { exec } = require("child_process");

var stdin = process.openStdin();

const lessonLoop = (rl, isFirstTime, finishCallback) => {
    let promptMessage = isFirstTime ? 
        "Let's see our git history. Simply type `git history` \n" : "\n";
    rl.question(promptMessage, (result) => {
        // exec emulates execution of this command in the console
        exec(result, (error, stdout, stderr) => {
            if (!fileHelper.directoryExists("./git-tutor/.git")) {
                console.log("Hooray!  You've succesfully created a .git folder");
                finishCallback();
            } else {
                console.log("Something went wrong. You just need to type `git init`, try again!");
                lessonLoop(rl, false, finishCallback);
            }
        });
    });
}

const gitInit =  {
    description: "Let's take a look at GIT LOG. A way to view the history of a git project",
    startLesson: function(rl, finishCallback) {
        clear();
        lessonLoop(rl, true, finishCallback);
    }
}

module.exports = gitInit
