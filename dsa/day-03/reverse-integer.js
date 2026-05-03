let num = 123;

function reverseInteger(n) {
  let nCopy = n;
  let reverse = 0;
  n = Math.abs(n);

  while (n > 0) {
    let lastDigit = n % 10;
    n = Math.trunc(n / 10);
    reverse = reverse * 10 + lastDigit;
  }

  let limit = Math.pow(2, 31);
  if (nCopy < -limit || nCopy > limit) return 0;

  return nCopy < 0 ? -reverse : reverse;
}

const result = reverseInteger(120);
console.log(result);
