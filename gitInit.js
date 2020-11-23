const fileHelper = require("./helpers/file");
const { clear } = require("console");

var stdin = process.openStdin();


const gitInit =  {
    description: "At first, let's try to teach you how to do the basics. Let's create the first repository! Each repository represents a project.",
    startLesson: function(rl) {
        clear();

        while (!fileHelper.directoryExists("./git-tutor/.git"))
        {
            rl.question("Let's first create a initial git. You can run the command git init to get started", () => 
            {
                rl.pause();
            });

        }

    }

}

module.exports = gitInit