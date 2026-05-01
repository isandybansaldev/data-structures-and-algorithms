let arr = [0, -1, 5, 2, -8, 3, -6, 9];

/**
 * Count negative number
 */
function countNegativeNumber(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

const result = countNegativeNumber(arr);
console.log(result);
