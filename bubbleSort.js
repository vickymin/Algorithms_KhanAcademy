var bubbleSort = function(arr) {
  var swapped = true;
  var len = arr.length;
  while(swapped) {
    swapped = false;
    for (var i = 1; i < len; i++) {
      if (arr[i-1] > arr[i]) {
        var temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
    len--;
  }
  return arr;
}
