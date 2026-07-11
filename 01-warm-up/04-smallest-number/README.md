# Problem: Smallest Number in an Array

## Problem Statement

Given an array of integers, find and return the **smallest element** present in the array.

It is guaranteed that the input array contains at least one element.

## Input

- An integer array `nums`.

## Output

- Return the smallest integer present in `nums`.

## Examples

### Example 1

**Input**

```text
nums = [4, 9, 2, 7, 5]
```

**Output**

```text
2
```

**Explanation**

The smallest element in the array is `2`.

---

### Example 2

**Input**

```text
nums = [-8, -3, -12, -1]
```

**Output**

```text
-12
```

**Explanation**

Among all negative numbers, `-12` is the smallest.

---

### Example 3

**Input**

```text
nums = [15]
```

**Output**

```text
15
```

**Explanation**

The array contains only one element, so it is the smallest.

---

### Example 4

**Input**

```text
nums = [6, 6, 6, 6]
```

**Output**

```text
6
```

**Explanation**

All elements are equal, so the smallest element is `6`.

---

### Example 5

**Input**

```text
nums = [-2, 0, 5, -7, 5]
```

**Output**

```text
-7
```

**Explanation**

The smallest value in the array is `-7`.

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Edge Cases

- The array contains only one element.
- All elements are equal.
- All elements are positive.
- All elements are negative.
- The smallest element appears multiple times.
- The smallest element is the first or last element in the array.
- The array contains a mix of negative, positive, and zero values.
