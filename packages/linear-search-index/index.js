/**
 * Search an array linearly in O(n) time complexity. Return index of array for found item or null.
 * 
 * @param  {Array} arrayToSearch - The array to be sorted.
 * @param  {Object} item - Item to search, integer or string.
 * @return {Integer} - array index or null.
 */

const linearSearchIndex = (arrayToSearch,item)=>{
	for(let i = 0; i < arrayToSearch.length; i++){
		if(arrayToSearch[i]==item){
			return i;
		}
	}
	return null;
}

module.exports = linearSearchIndex;