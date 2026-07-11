# Problem: Count Negative Numbers

## Problem Statement

Given an array of integers, count how many elements are negative. A number is considered negative if it is **strictly less than 0**.

Return the total count of negative numbers present in the array.

## Input

- An integer array `nums`.

## Output

- Return an integer representing the number of negative elements in `nums`.

## Examples

### Example 1

**Input**

```text
nums = [-5, 3, -2, 8, -1]
```

**Output**

```text
3
```

**Explanation**

The negative numbers are `-5`, `-2`, and `-1`. Hence, the count is `3`.

---

### Example 2

**Input**

```text
nums = [4, 7, 0, 9]
```

**Output**

```text
0
```

**Explanation**

There are no negative numbers in the array.

---

### Example 3

**Input**

```text
nums = [-8, -6, -4, -2]
```

**Output**

```text
4
```

**Explanation**

All elements in the array are negative.

---

### Example 4

**Input**

```text
nums = []
```

**Output**

```text
0
```

**Explanation**

The array is empty, so there are no negative numbers.

---

### Example 5

**Input**

```text
nums = [0]
```

**Output**

```text
0
```

**Explanation**

Zero is neither positive nor negative.

## Constraints

- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Edge Cases

- The input array is empty.
- The array contains only one element.
- All elements are negative.
- No elements are negative.
- The array contains only zeros.
- The array contains a mix of positive, negative, and zero values.
- Duplicate negative numbers should each be counted.
