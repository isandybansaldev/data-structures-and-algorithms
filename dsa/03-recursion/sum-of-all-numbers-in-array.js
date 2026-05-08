let arr = [7, 8, 1, 0, -1, -2];

function sum(n) {
  if (n === arr.length - 1) return arr[n];
  return arr[n] + sum(n + 1);
}

const result = sum(0);
console.log(result);

function sum2(n) {
  if (n === 0) return arr[0];
  return arr[n] + sum2(n - 1);
}

const result2 = sum2(arr.length - 1);
console.log(result);
