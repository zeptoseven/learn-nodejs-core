function moveZeroes(nums) {
  let nonZeroIndex = 0; // Pointer for placing non-zero elements

  // Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i]; // Move non-zero element to the nonZero Index
      nonZeroIndex++; // Increment the nonZeroIndex pointer
    }
  }

  // Fill the remaining positions with zeros
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}
