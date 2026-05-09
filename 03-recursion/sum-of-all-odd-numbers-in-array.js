let arr = [3, 2, 4, 1, 5];

function sum(n) {
  let isOdd = arr[n] % 2 !== 0;

  if (n === arr.length - 1) {
    return isOdd ? arr[n] : 0;
  }

  return isOdd ? arr[n] + sum(n + 1) : 0 + sum(n + 1);
}

const result = sum(0);
console.log(result);
