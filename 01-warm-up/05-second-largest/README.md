# Problem: Second Largest Number in an Array

## Problem Statement

Given an array of integers, find and return the **second largest distinct element** present in the array.

If the array does not contain at least **two distinct elements**, return `-1`.

## Input

- An integer array `nums`.

## Output

- Return the second largest **distinct** integer in `nums`.
- Return `-1` if no such element exists.

## Examples

### Example 1

**Input**

```text
nums = [4, 9, 2, 7, 5]
```

**Output**

```text
7
```

**Explanation**

The largest element is `9`, and the second largest distinct element is `7`.

---

### Example 2

**Input**

```text
nums = [10, 5, 10, 8, 8]
```

**Output**

```text
8
```

**Explanation**

The distinct elements are `10`, `8`, and `5`. The second largest distinct element is `8`.

---

### Example 3

**Input**

```text
nums = [6, 6, 6]
```

**Output**

```text
-1
```

**Explanation**

The array contains only one distinct element, so a second largest distinct element does not exist.

---

### Example 4

**Input**

```text
nums = [-8, -3, -12, -1]
```

**Output**

```text
-3
```

**Explanation**

The largest element is `-1`, and the second largest distinct element is `-3`.

---

### Example 5

**Input**

```text
nums = [15]
```

**Output**

```text
-1
```

**Explanation**

The array contains only one element, so a second largest distinct element does not exist.

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Edge Cases

- The array contains only one element.
- All elements are identical.
- The largest element appears multiple times.
- The second largest element appears multiple times.
- All elements are negative.
- The array contains a mix of negative, positive, and zero values.
- The second largest distinct element is the first or last element in the array.
