/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reverse = 0;

  let xCopy = x;
  x = Math.abs(x);
  while (x > 0) {
    // Get the last digit
    let lastDigit = x % 10;

    // Append to reverse
    reverse = reverse * 10 + lastDigit;

    // Remove last digit
    x = Math.trunc(x / 10);
  }

  let limit = Math.pow(2, 31);

  if (reverse < -limit || reverse > limit) {
    return 0;
  }

  return xCopy < 0 ? -reverse : reverse;
};
