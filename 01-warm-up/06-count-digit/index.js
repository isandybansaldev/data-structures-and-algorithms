function countDigit(num) {
  num = Math.abs(num);
  if (num === 0) return 1;
  let count = 0;

  while (num > 0) {
    num = num / 10;
    num = Math.floor(num);
    count = count + 1;
  }

  return count;
}

let result = countDigit(12345);
console.log(result);
