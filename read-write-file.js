// Import the built-in Node.js 'fs' (File System) module to work with files.
const fs = require("fs");

// Synchronously read the contents of the file 'input.txt' located in the 'files' folder.
// 'readFileSync' blocks the main JavaScript thread until the file is completely read.
// The 'utf-8' parameter specifies the character encoding, so the file content is returned as a string.
let text = fs.readFileSync("./files/input.txt", "utf-8");

// Output the content of 'input.txt' to the console.
console.log(text);

// Create a new string that includes the content from 'input.txt' and the current date and time.
// This string will be used as the content to write to another file.
let content = `Content taken from input.txt: ${text}, Date extracted: ${new Date()}`;

// Synchronously write the 'content' string to a new file 'output.txt' in the 'files' folder.
// 'writeFileSync' also blocks the main thread until the writing operation is complete.
fs.writeFileSync("./files/output.txt", content);

// Asynchronously read the contents of 'input.txt' using 'readFile'.
// Asynchronous operations do not block the main thread; instead, they run in the background.
// When the file reading is complete, the provided callback function is executed.
fs.readFile("./files/input.txt", "utf-8", (error, data) => {
  // Check if an error occurred during the asynchronous read operation.
  if (error) {
    // If there is an error, log the error details to the console.
    console.log(`Error reading file`, error);
    return; // Exit the callback if there's an error.
  }

  // If no error occurred, log the content read from the file.
  console.log(`Text from async read: ${data}`);
});

// Log a message to the console immediately after starting the asynchronous read.
// This demonstrates that the asynchronous operation does not block further code execution.
console.log("Reading file (Async)...");
