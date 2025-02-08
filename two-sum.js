function findTwoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i <= arr.length - 1; i++) {
    let compliment = target - arr[i];

    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }

    map.set(arr[i], i);
  }
}
