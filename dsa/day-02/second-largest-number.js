let arr = [5, 1, 3, -17, 4, -18, 12];

/**
 * Find Second Largest number in an array
 */
function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  if (arr.length < 2) {
    return -1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const result = secondLargest(arr);
console.log(result);
