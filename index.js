// How to import a single value from a file that exports a single value
// const myMessage = require('./messages')

// How to import values from a file that exports MULTIPLE values
// const { message, name } = require('./messages')


// Assiging the entire exported value from a file that exports MULTIPLE values.
// We can then DOT into our object to use any of the contents
// const messagesFile = require('./messages')
// console.log(messagesFile)

// How to give an incoming value an alias(for shortening or clarification purposes, or just not having duplicates)
// const { message: myMessage, name } = require('./messages')

// console.log(myMessage)


const {
    message, 
    name,
    customMessage
} = require('./messages')


// console.log( customMessage(message, name) )


// Logs the process object. Has all of the information for the run time and environment
// console.log(process)

// process.argv is the array of arguments that were passed in a command line "command": 
// Command: node index.js "cats and dogs" 435 
// => [ '/usr/local/bin/node', '/Users/9.0-instructor/Documents/10.5/module-3/my-node-project/index.js', 'cats and dogs', '435']


// Calling customMessage and passing in TWO arguments from the command line
// Those arguments live in the array process.argv
// console.log( customMessage(process.argv[2], process.argv[3]) )



// Importing a JSON file
const donuts = require('./donuts.json')
// console.log(donuts)

// Iterating over the array of donuts and logging each donut's name to the console
donuts.forEach((donut, index) => {
    console.log(donut.name)
})