let arr = [2, 0, 9, 5, 12, 7, 5];

/**
 * Search an element in an array
 */
function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

const result = searchElement(arr, 12);
console.log(result);
