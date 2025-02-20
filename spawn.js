const { spawn } = require("child_process");

const ls = spawn("cd .. && code .", { shell: true }); 


ls.stdout.on("data", (data) => {
  console.log(`Output: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`Error: ${data}`);
});

ls.on("close", (code) => {
  console.log(`Process exited with code ${code}`);
});
