function searchElement(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

let nums = [3, 5, 6, 1, 0, 2, 9];
const result = searchElement(nums, 0);
console.log(result);
