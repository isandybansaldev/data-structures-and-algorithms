# Problem: Largest Number in an Array

## Problem Statement

Given an array of integers, find and return the **largest element** present in the array.

It is guaranteed that the input array contains at least one element.

## Input

- An integer array `nums`.

## Output

- Return the largest integer present in `nums`.

## Examples

### Example 1

**Input**

```text
nums = [4, 9, 2, 7, 5]
```

**Output**

```text
9
```

**Explanation**

The largest element in the array is `9`.

---

### Example 2

**Input**

```text
nums = [-8, -3, -12, -1]
```

**Output**

```text
-1
```

**Explanation**

Among all negative numbers, `-1` is the largest.

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

The array contains only one element, so it is the largest.

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

All elements are equal, so the largest element is `6`.

---

### Example 5

**Input**

```text
nums = [-2, 0, 5, -7, 5]
```

**Output**

```text
5
```

**Explanation**

The largest value in the array is `5`, which appears more than once.

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Edge Cases

- The array contains only one element.
- All elements are equal.
- All elements are negative.
- The largest element appears multiple times.
- The largest element is the first or last element in the array.
- The array contains a mix of negative, positive, and zero values.
