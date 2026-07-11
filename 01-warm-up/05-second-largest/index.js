function findSecondLargest(nums) {
  if (nums.length < 2) {
    return -1;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      let temp = largest;
      largest = nums[i];
      secondLargest = temp;
    } else if (nums[i] > secondLargest && nums[i] !== largest) {
      secondLargest = nums[i];
    }
  }

  return secondLargest === -Infinity ? -1 : secondLargest;
}

let nums = [4, 9, 2, 7, 5];
let result = findSecondLargest(nums);
console.log(result);
