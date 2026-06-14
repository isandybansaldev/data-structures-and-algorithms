let nums = [-3, -7, -1, -5];

function findSmallestNumber(nums) {
  let smallest = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
    }
  }

  return smallest;
}

const result = findSmallestNumber(nums);
console.log(result);
