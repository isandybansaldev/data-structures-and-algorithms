# Problem: Search Element

## Problem Statement

Given an array of integers and a target value, determine whether the target exists in the array. Return the **0-based index** of its **first occurrence** if found; otherwise, return **-1**.

The array is **not guaranteed to be sorted**, and duplicate values may be present.

## Input

- An integer array `nums`.
- An integer `target` representing the value to search for.

## Output

- Return the **0-based index** of the first occurrence of `target` in `nums`.
- Return `-1` if the target does not exist in the array.

## Examples

### Example 1

**Input**

```text
nums = [4, 2, 7, 1, 9]
target = 7
```

**Output**

```text
2
```

**Explanation**

The target value `7` is present at index `2`.

---

### Example 2

**Input**

```text
nums = [5, 3, 8, 3, 6]
target = 3
```

**Output**

```text
0
```

**Explanation**

The target appears multiple times. Return the index of its **first occurrence**, which is `0`.

---

### Example 3

**Input**

```text
nums = [10, 20, 30]
target = 15
```

**Output**

```text
-1
```

**Explanation**

The target does not exist in the array.

---

### Example 4

**Input**

```text
nums = []
target = 5
```

**Output**

```text
-1
```

**Explanation**

The array is empty, so the target cannot be found.

---

### Example 5

**Input**

```text
nums = [8]
target = 8
```

**Output**

```text
0
```

**Explanation**

The array contains a single element, which matches the target.

## Constraints

- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`

## Edge Cases

- The input array is empty.
- The array contains only one element.
- The target is the first element.
- The target is the last element.
- The target appears multiple times; return the first occurrence.
- The target does not exist in the array.
- The array may contain negative numbers and duplicate values.
