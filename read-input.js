// Import the 'readline' module from Node.js.
// This module allows us to read input from the user via the terminal (console).
const readline = require("readline");

// Create an interface to handle input and output.
// The 'readline.createInterface' method sets up the input (from the keyboard) and output (to the console).
const rl = readline.createInterface({
  input: process.stdin, // Use the standard input stream (keyboard input)
  output: process.stdout, // Use the standard output stream (console output)
});

// Ask the user a question and wait for their response.
// The 'question' method displays the prompt ("Please enter your name: ") to the user.
// When the user enters a response and presses Enter, the provided callback function is executed.
rl.question("Please enter your name: ", (name) => {
  // This code runs after the user enters their name.
  // The variable 'name' contains the text entered by the user.
  console.log("You entered: " + name); // Display the entered name in the console.

  // Close the readline interface once we're done with the input.
  rl.close();
});

// Listen for the 'close' event, which is emitted when the readline interface is closed.
// This is useful to perform any final actions or cleanup.
rl.on("close", () => {
  console.log("Interface closed"); // Notify that the interface has been closed.

  // Exit the Node.js process with a status code of 0.
  // A status code of 0 typically means the program has finished successfully.
  process.exit(0);
});
