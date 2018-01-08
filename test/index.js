import test from 'ava';
const insertionSortAsc = require('../packages/insertion-sort-ascending');
const insertionSortDesc = require('../packages/insertion-sort-descending');

test(`sorts an array of numbers, ascending order`, t => {
	let arr = [5, 2, 4, 6, 1, 3];
	t.deepEqual(insertionSortAsc(arr), [1, 2, 3, 4, 5, 6]);
});

test(`sorts an array of numbers, descending order`, t => {
	let arr = [5, 2, 4, 6, 1, 3];
	t.deepEqual(insertionSortDesc(arr), [6, 5, 4, 3, 2, 1]);
});

test(`sorts an empty array returns an empty array`, t => {
	let arr = [];
	t.deepEqual(insertionSortAsc(arr), []);
	t.deepEqual(insertionSortDesc(arr), []);
});

