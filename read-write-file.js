const fs = require("fs");

let text = fs.readFileSync("./files/input.txt", "utf-8"); //Synchronous execution runs on the main JS thread - Blocks the main thread
console.log(text);

let content = `Content taken from input.txt: ${text}, Date extracted: ${new Date()}`;
fs.writeFileSync("./files/output.txt", content); //Synchronous execution runs on the main JS thread - BLOCKS the main thread

fs.readFile("./files/input.txt", "utf-8", (error, data) => { // Async read won't block the main thread.
  if (error) {
    console.log(`Error reading file`, error);
  }
  console.log(`Text from async read: ${data}`);
});
console.log("Reading file (Async)...");
