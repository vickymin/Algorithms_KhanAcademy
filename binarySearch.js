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
