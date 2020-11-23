const fileHelper = require("./helpers/file");
const lessonFinisher = require("./lessonManager");
const { clear } = require("console");
const { exec } = require("child_process");

var stdin = process.openStdin();

const lessonLoop = (rl, isFirstTime, finishCallback) => {
    let promptMessage = isFirstTime ? 
        "Let's first create a initial git. You can run the command git init to get started\n" : "\n";
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
    description: "At first, let's try to teach you how to do the basics. Let's create the first repository! Each repository represents a project.",
    startLesson: function(rl, finishCallback) {
        clear();
        lessonLoop(rl, true, finishCallback);
    }
}

module.exports = gitInit
