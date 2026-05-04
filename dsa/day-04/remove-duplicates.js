let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
 * Remove Duplicates from Sorted Array
 */
function removeDuplicates(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[x] !== nums[i]) {
      nums[x + 1] = nums[i];
      x++;
    }
  }

  return nums;
}

const result = removeDuplicates(nums);
console.log(result);
