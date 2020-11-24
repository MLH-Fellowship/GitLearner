#!/usr/bin/env node

const { clear } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const file = require("./helpers/file");

// lesson array
const lessons = [require("./fillEmail"), require('./gitInit'), require("./gitLog")];

// add space to console
const writeDelimiter = () => {
    console.log();
    console.log('--------------------');
    console.log();
}

const mainLoop = () => {
    console.log("Choose which topic you'd like to cover!")
    console.log("We recommend going step by step.")

    let num = 1;
    for (let lesson of lessons) {
        console.log(num + ") " + lesson.description);
        num++;
    }        
    rl.question("Please enter the lesson number: ", decide);
}                                

const onLessonFinish = () => {
    clear();
    console.log("Congratulations on finishing the lesson!");
    writeDelimiter();
    mainLoop();
};

const decide = (lessonNumString) => {
    console.log("came to decision: " + lessonNumString);
    let lessonNum = Number.parseInt(lessonNumString);
    if (Number.isNaN(lessonNum)) {
        console.log("Please provide a valid number!");
    } else if (lessonNum < 1 || lessonNum > lessons.length) {
        console.log("This lesson does not exist yet :)");
        writeDelimiter();
    } else {
        lessons[lessonNum - 1].startLesson(rl, onLessonFinish);
    }
}

// create tutoring file to create the git repo in, and do other things
if (!file.directoryExists("./git-tutor"))
{
    // create the actual directory
    file.createTutorDirectory();
}
// clear console
clear();


mainLoop();
