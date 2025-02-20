function findLargestOddNumber(str) {
    // Step 1: Extract all the numeric groups from the string using a regular expression
    const numbers = str.match(/\d+/g);
    
    // Step 2: Filter out the even numbers and find the largest odd number
    const oddNumbers = numbers
        .map(Number) // Convert to numbers
        .filter(num => num % 2 !== 0); // Filter odd numbers
    
    // Step 3: Return the largest odd number or a message if there are no odd numbers
    if (oddNumbers.length === 0) {
        return "No odd numbers found";
    } else {
        return Math.max(...oddNumbers);
    }
}