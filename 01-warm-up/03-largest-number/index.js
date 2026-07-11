function largestNumber(nums) {
  let largest = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  return largest;
}

let nums = [4, 9, 2, 7, 5];
let result = largestNumber(nums);
console.log(result);
