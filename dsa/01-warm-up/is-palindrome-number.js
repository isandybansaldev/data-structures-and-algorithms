let num = 2552;

function isPalindromeNumber(n) {
  // Negative number can never be a palindrome number
  if (n < 0) return false;

  let nCopy = n;
  let reverse = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    n = Math.trunc(n / 10);
    reverse = reverse * 10 + lastDigit;
  }

  return reverse === nCopy;
}

const result = isPalindromeNumber(num);
console.log(result);
