let arr = [1, 4, 2, 0, 9, 6, 8];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

const result = linearSearch(arr, 9);
console.log(result);
