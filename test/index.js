import test from 'ava';
const insertionSort = require('../index');

test(`sorts an array of numbers`, t => {
	let arr = [5, 2, 4, 6, 1, 3];
	t.deepEqual(insertionSort(arr), [1, 2, 3, 4, 5, 6]);
});

test(`sorts an empty array returns an empty array`, t => {
	let arr = [];
	t.deepEqual(insertionSort(arr), []);
});

