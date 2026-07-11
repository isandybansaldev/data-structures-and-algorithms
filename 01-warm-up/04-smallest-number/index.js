function smallestNumber(nums) {
  let smallest = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
    }
  }

  return smallest;
}

let nums = [4, 9, 2, 7, 5];
let result = smallestNumber(nums);
console.log(result);
