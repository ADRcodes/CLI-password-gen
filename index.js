// A CLI program that generates a password for the user

// Importing the required modules
const process = require('process');

// Parse the second argument from the command line (if any)
const args = (process.argv.slice(2));


// Function to generate a random password
function generatePassword(length = 8) {

  let password = ""

  for (let i = 0; i < length; i++) {
    password += randomLetter()
  }

  return password
}

// Generate a single random letter
function randomLetter() {
  // 97 is 'a' in ASCII, and there are 26 letters
  const randomCode = Math.floor(Math.random() * 26) + 97;
  // Convert that code into a character using fromCharCode
  return String.fromCharCode(randomCode)
}

function printHelpMessage() {
  console.log(`
  Generates a random password of the given length.
  
  Usage: node index.js <length>

  Example: 
    node index.js 12
    Result: "a1b2c3d4e5f6"

  Options:
    -h, --help      Show this help message and exit

  `)
}

function handleArgs() {
  console.log(args)

  if (args.includes("-h") || args.includes("--help")) {
    printHelpMessage()
    process.exit(0)
  }

  else if (args.includes("--length")) {

    const lengthArg = parseInt(args[args.indexOf("--length") + 1])

    // Check if lengthArg is a number, then check if it is a valid number
    if (!isNaN(lengthArg)) {
      if (lengthArg < 1) {
        console.error("Please provide a number greater than 0")
        process.exit(1)
      }
      if (lengthArg > 32) {
        console.error("Please provide a number less than 32")
        process.exit(1)
      }
      if (lengthArg % 1 !== 0) {
        console.error("Please provide a whole number")
        process.exit(1)
      }
      console.log("----- Password Generated -----")
      console.log(`Length:    ${lengthArg}`)
      console.log(`Password:  ${generatePassword(lengthArg)}`)
    } else {
      console.error("Please provide a valid number for the length")
      printHelpMessage()
      process.exit(1)
    }
  }
  else {
    console.log("----- Password Generated -----")
    console.log(`Length: 8`)
    console.log(`Password: ${generatePassword()}`)
  }
}

handleArgs()



