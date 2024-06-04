// Exports a single value (variable, function, etc)

// const message = "Say hello to my lil friend!"

// module.exports = message


// Exports multiple values from one file
const message = "Say hello to my lil friend!"
const name = "Tony"
const thirdVar = "Montana"

const customMessage = (msg, personName) => {
    return `${msg}, love ${personName}.`
}

module.exports = { message, name, thirdVar, customMessage }


