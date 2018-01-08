# insertion-sort
A library of common dependency-free insertion sort algorithms.

Each insertion sort has the same time complexity and returns a sorted array. The original array remains untouched.

## ascending order:

```
const insertionSort = require('insertion-sort-ascending');

insertionSort([5, 2, 4, 6, 1, 3])
  //returns [1, 2, 3, 4, 5, 6]
```

## descending order:
```
const insertionSort = require('insertion-sort-descending');

insertionSort([5, 2, 4, 6, 1, 3])
  //returns [6, 5, 4, 3, 2, 1]
```
