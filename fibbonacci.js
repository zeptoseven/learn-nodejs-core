// function fibonacci(n) {
//     let a = 0, b = 1;
//     for (let i = 2; i <= n; i++) {
//         let temp = a + b;
//         a = b;
//         b = temp;
//     }
//     return n === 0 ? a : b;
// }

// // Example usage:
// console.log(fibonacci(6)); // 8s

function generateFibonacci(limit) {
    let fibSeries = [0, 1]; // Initialize the first two Fibonacci numbers

    while (true) {
        let nextFib = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
        
        if (nextFib > limit) break; // Stop if the next Fibonacci number exceeds the limit
        
        fibSeries.push(nextFib);
    }

    return fibSeries;
}

console.log(generateFibonacci(8000))