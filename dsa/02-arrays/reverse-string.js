let s = ["m", "a", "y", "a", "n", "k"];

function reverseString(s) {
  let x = 0;
  let y = s.length - 1;

  while (x < y) {
    let temp = s[x];
    s[x] = s[y];
    s[y] = temp;
    x++;
    y--;
  }

  return s;
}

const result = reverseString(s);
console.log(result);
