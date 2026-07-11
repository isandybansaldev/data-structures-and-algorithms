function searchElement(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
}

let nums = [4, 2, 7, 1, 9];
let result = searchElement(nums, 7);
console.log(result);
