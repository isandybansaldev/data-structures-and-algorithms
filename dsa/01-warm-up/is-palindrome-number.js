/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // Negative number cannot be a palindrome
  if (x < 0) return false;

  let reverseNumber = 0;
  let xCopy = x;
  while (x > 0) {
    // Get the last digit
    let lastDigit = x % 10;

    // Append to reverse
    reverseNumber = reverseNumber * 10 + lastDigit;

    // Remove last digit
    x = Math.trunc(x / 10);
  }

  return reverseNumber === xCopy;
};
