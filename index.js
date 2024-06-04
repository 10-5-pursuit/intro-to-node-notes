// How to import a single value from a file that exports a single value
// const myMessage = require('./messages')

// How to import values from a file that exports MULTIPLE values
// const { message, name } = require('./messages')


// Assiging the entire exported value from a file that exports MULTIPLE values.
// We can then DOT into our object to use any of the contents
// const messagesFile = require('./messages')
// console.log(messagesFile.message)

// How to give an incoming value an alias(for shortening or clarification purposes, or just not having duplicates)
const { message: myMessage, name } = require('./messages')

console.log(myMessage)