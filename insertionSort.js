/******************************* Insertion Sort Pseudocode *******************************
 * 1. Call insert to insert the element that starts at index 1 into the sorted subarray
 *    in index 0.
 * 2. Call insert to insert the element that starts at index 2 into the sorted subarray
 *    in indices 0 through 1.
 * 3. Call insert to insert the element that starts at index 3 into the sorted subarray
 *    in indices 0 through 2.
 * 4. ...
 * 5. Finally, call insert to insert the element that starts at index n−1 into the sorted
 *    subarray in indices 0 through n−2.
******************************************************************************************/

//Insert value before an index
//the elements from array[0] to array[rightIndex] are sorted in ascending order
var insert = function(array, rightIndex, value){
    var i;
    for(i = rightIndex; i >= 0 && array[i] > value; i--){
        array[i + 1] = array[i];
    }
    array[i + 1] = value;
};

//Insertion Sort
var insertionSort = function(array){
  for(var i = 1; i < array.length; i++){
    insert(array, i - 1, array[i]);
  }
}
