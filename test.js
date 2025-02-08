function testPossible(s1, s2, R) {
  const compare = (s1 + s2).toUpperCase().split("").sort().join("");
  const available = R.toUpperCase().split("").sort().join("");
  console.log(available);

  if (compare == available) {
    console.log("Yes");
  } else {
    console.log("No");
  }

  // const availableChars = R.toUpperCase();

  // // Function to count occurrences of characters
  // function getCharCount(str) {
  //   const charCount = {};
  //   for (const char of str) {
  //     charCount[char] = (charCount[char] || 0) + 1;
  //   }
  //   console.log(charCount);
  //   return charCount;
  // }

  // const requiredCount = getCharCount(string1 + string2);
  // const availableCount = getCharCount(availableChars);

  // // Check if both objects have the exact same characters and counts
  // for (const char in requiredCount) {
  //   if (requiredCount[char] !== availableCount[char]) {
  //     console.log("No");
  //     return;
  //   }
  // }

  // // Ensure there are no extra characters in R
  // for (const char in availableCount) {
  //   if (availableCount[char] !== requiredCount[char]) {
  //     console.log("No");
  //     return;
  //   }
  // }

  // console.log("Yes");
}

// Example Cases:
testPossible("SAM", "JOHN", "JOHNSAML"); // Yes
