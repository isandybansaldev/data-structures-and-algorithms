function powerOfTwo(n) {
  if (n === 1) return true;

  if (n % 2 === 0 && n > 0) return powerOfTwo(n / 2);
  else return false;
}

const result = powerOfTwo(0);
console.log(result);
