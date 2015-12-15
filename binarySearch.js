/******************************** Binary Search Pseudocode ********************************
 * 1. Let min = 0 and max = n-1.
 * 2. Compute guess as the average of max and min, rounded down (so that it is an integer).
 * 3. If array[guess] equals target, then stop. You found it! Return guess.
 * 4. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
 * 5. Otherwise, the guess was too high. Set max = guess - 1.
 * 6. Go back to step 2.
*******************************************************************************************/

//Binary Search
var doSearch = function(array, targetValue){
  var min = 0;
  var max = array.length - 1;
  var guess;
  while(min <= max){
    guess = Math.floor((min + max) / 2);
    if(array[guess] == targetValue){
      return guess;
    }else if(array[guess] < tagetValue){
      min = guess + 1;
    }else{
      max = guess - 1;
    }
  }
  return -1;
}

//print the guess at each step;
var doSearch = function(array, targetValue){
  var min = 0;
  var max = array.length - 1;
  var guess;
  while(min <= max){
    guess = Math.floor((min + max) / 2);
    pritln(guess);
    if(array[guess] == targetValue){
      return guess;
    }else if(array[guess] < tagetValue){
      min = guess + 1;
    }else{
      max = guess - 1;
    }
  }
  return -1;
}
