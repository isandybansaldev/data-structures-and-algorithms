function countNegative(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      count = count + 1;
    }
  }

  return count;
}

let nums = [-5, 3, -2, 8, -1];
let result = countNegative(nums);
console.log(result);
