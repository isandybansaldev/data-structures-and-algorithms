function countNegativeNumbers(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

let nums = [0, 2, -3, 1, -9, -5];
const result = countNegativeNumbers(nums);
console.log(result);
