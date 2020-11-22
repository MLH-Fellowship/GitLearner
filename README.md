## How it works

Starting point of the application - `lessonManager.js`. Start it with `node .` or `node lessonManager.js`.  Lessons are organized into separate files and imported into `lessonManager`. `lessonManager` repeatedly prints a list of available lessons, checks for user input and starts the lesson user selected. Example is present in `fillEmail` file.

### Lesson format:

In order to be compatible with `lessonManager`, you have to create an object with string field `description` and `startLesson` method, and append it to `lessons` global variable in `lessonManager.js`.
`description` is used when printing a list of lessons, and `startLesson` is invoked when user selects lesson by printing corresponging number.

### TODO
implement a possibility to install it globally, making it invokable with `lessonManager`, not `node lessonManager`.
