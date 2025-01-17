// A CLI program that generates a password for the user

// Importing the required modules
const process = require('process');

// Parse the second argument from the command line (if any)
const args = (process.argv.slice(2));


// Function to generate a random password
function generatePassword(length = 8, uppercase = false, numbers = false, symbols = false) {

  let password = ""


  for (let i = 0; i < length; i++) {
    password += randomLetter()
  }

  // If the uppercase flag is present, convert the first letter to uppercase
  if (uppercase) {
    password = password[0].toUpperCase() + password.slice(1)
  }

  // If the numbers flag is present and not the symbols flag, replace the last letter with a number
  if (numbers && !symbols) {
    password = password.slice(0, -1) + Math.floor(Math.random() * 10)
  }

  // If the symbols flag is present and not the numbers flag, replace the last letter with a symbol
  if (symbols && !numbers) {
    const symbols = "!@#$%^&*"
    password = password.slice(0, -1) + symbols[Math.floor(Math.random() * symbols.length)]
  }

  // If both the numbers and symbols flags are present, replace the second last letter with a number and the last letter with a symbol
  if (numbers && symbols) {
    password = password.slice(0, -2) + Math.floor(Math.random() * 10) + "!@#$%^&*"[Math.floor(Math.random() * 8)]
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
  
  Usage:

  Example: 
    node index.js --length 6 --uppercase --numbers
    result: F3gH7t

  Options:
    -h, --help      Show this help message and exit
    --length        The length of the password to generate
    --uppercase     Include uppercase letters in the password
    --numbers       Include numbers in the password
    --symbols       Include symbols in the password

  `)
}

// Function to handle the arguments passed in the command line
function handleArgs() {

  // check if the --uppercase flag, --numbers flag, or --sybmols flag is present and save to booleans
  const uppercase = args.includes("--uppercase")
  const numbers = args.includes("--numbers")
  const symbols = args.includes("--symbols")

  // If the help flag is present, print the help message
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
      console.log(`
----- Password Generated -----
  Length:    ${lengthArg}
  Password:  ${generatePassword(lengthArg, uppercase, numbers, symbols)}
------------------------------`)
    } else {
      console.error("Please provide a valid number for the length")
      printHelpMessage()
      process.exit(1)
    }
  }
  else {
    console.log(`
----- Password Generated -----
  Length:    8
  Password:  ${generatePassword(8, uppercase, numbers, symbols)}
------------------------------`)
  }
}

handleArgs()



