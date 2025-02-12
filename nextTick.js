console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Inside Promise.then");
});

process.nextTick(() => {
    console.log("Inside nextTick");
});

console.log("End");
