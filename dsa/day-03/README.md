## Day 03

### ✅ Problems Solved

1. [Count Digit](./count-digit.js)
2. [Is Palindrome Number](https://leetcode.com/problems/palindrome-number/)
3. [Reverse Integer](https://leetcode.com/problems/reverse-integer/)

### 📘 Notes

**Get the last digit from number**

```js
let num = 439;
let lastDigit = 439 % 10; // 9
```

**Remove the last digit from number**

Divide digit by 10 and truncate it

```js
let num = 1234;
num = Math.trunc(num / 10); // 123

👉 Math.trunc drop the fractional part
```

**Appending a digit to a number**

```js
let n = 10;
let d = 5;

n = n * 10 + d; // 105
```
