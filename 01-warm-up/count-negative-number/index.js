let arr = [1, -2, 3, -5, 0, -8, 7, -9];

function countNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

const result = countNegative(arr);
console.log(result);
