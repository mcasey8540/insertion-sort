/**
 * Sort an array by ascending values via insertion sort, pass by value
 * 
 * @param  {Array} arr - The array to be sorted.
 * @return {Array} - The sorted array.
 */

const insertionSortAscending = (arrayToSort)=>{
	let arr = arrayToSort.slice(0)
	for(var j = 1; j < arr.length; j++){
		let key = arr[j];
		let i = j - 1;
		while(i>-1 && arr[i] > key){
			arr[i + 1] = arr[i];
			i = i - 1;
		}
		arr[i+1]=key;
	}
	return arr;
}

module.exports = insertionSortAscending;
