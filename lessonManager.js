#!/usr/bin/env node

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fillEmail = require("./fillEmail");

const lessons = [fillEmail];

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

const decide = (lessonNumString) => {
    let lessonNum = Number.parseInt(lessonNumString);
    if (Number.isNaN(lessonNum)) {
        console.log("Please provide a valid number!");
    } else if (lessonNum < 1 || lessonNum > lessons.length) {
        console.log("This lesson does not exist yet :)");
        writeDelimiter();
    } else {
        lessons[lessonNum - 1].startLesson();
        console.log("Congratulations on finishing the lesson!");
        writeDelimiter();
    }

    mainLoop();
}

mainLoop();

module.exports = {
    mainLoop
};
