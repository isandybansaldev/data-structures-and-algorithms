# Problem: Count Digits in a Number

## Problem Statement

Given an integer `num`, count and return the total number of digits in the number.

The negative sign (`-`) is **not considered a digit**. The number `0` contains exactly **one digit**.

## Input

- An integer `num`.

## Output

- Return an integer representing the total number of digits in `num`.

## Examples

### Example 1

**Input**

```text
num = 12345
```

**Output**

```text
5
```

**Explanation**

The number `12345` contains `5` digits.

---

### Example 2

**Input**

```text
num = -9876
```

**Output**

```text
4
```

**Explanation**

The negative sign is not counted, so `-9876` contains `4` digits.

---

### Example 3

**Input**

```text
num = 0
```

**Output**

```text
1
```

**Explanation**

The number `0` contains exactly one digit.

---

### Example 4

**Input**

```text
num = 7
```

**Output**

```text
1
```

**Explanation**

The number `7` contains one digit.

---

### Example 5

**Input**

```text
num = 100000
```

**Output**

```text
6
```

**Explanation**

The number `100000` contains `6` digits, including all zero digits.

## Constraints

- `-10^9 <= num <= 10^9`

## Edge Cases

- The number is `0`.
- The number contains only one digit.
- The number is negative.
- The number contains one or more zero digits.
- The number is at the minimum or maximum allowed value.
