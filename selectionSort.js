/******************************* Selection Sort Pseudocode ******************************
 * 1. Find the smallest card. Swap it with the first card.
 * 2. Find the second-smallest card. Swap it with the second card.
 * 3. Find the third-smallest card. Swap it with the third card.
 * 4. Repeat finding the next-smallest card, and swapping it into the correct position
 *    until the array is sorted.
****************************************************************************************/

//swap two items in an array
var swap = function(array, firstIndex, secondIndex){
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//find index of minimum value in a subarry
var indexOfMinimum = function(array, startIndex){
  // Set initial values for minValue and minIndex,
  // based on the leftmost entry in the subarray:
  var minIndex = startIndex;
  var minValue = array[startIndex];

  // Loop over items starting with startIndex,
  // updating minValue and minIndex as needed:
  for(var i = minIndex+1; i < array.length; i++){
    if(array[i] < minIndex){
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
}

//Selection Sort
var selectionSort = function(array){
  var min;
  for(var i = 0; i < array.length; i++){
    min = indexOfMinimum(array, i);
    swap(array, i, min);
  }
}
