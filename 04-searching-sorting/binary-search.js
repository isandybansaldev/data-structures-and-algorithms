let nums = [-1, 0, 3, 5, 9, 12];
let target = 12;

function binarySearch(nums, target) {
  if (nums.length === 0) return -1;

  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.trunc((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const result = binarySearch(nums, target);
console.log(result);
