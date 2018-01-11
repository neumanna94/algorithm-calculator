var fibArray = [];
//Finds nth iteration
var fibIterator = function(inputIteration){
  if (inputIteration <= 1){
    return inputIteration;
  }
  return fibIterator(inputIteration-1) + fibIterator(inputIteration-2);
}
//Creates a Fibonacci Array using fibIterator
var fibArrayWithFibIterator = function(inputIteration){
  for(var i = 1; i <= inputIteration; i ++){
    var pushMe = fibIterator(i);
    fibArray.push(pushMe);
  }
  return fibArray;
}

var newtonApproximation = function(inputEquation){

}
//https://www.geeksforgeeks.org/insertion-sort/
var insertSort = function(inputArray){
  var n = inputArray.length;
  var i, k;
  for(i = 1; i <n; i ++){
    key = inputArray[i];
    k=i-1;
    while(k>=0 && inputArray[k] > key) {
      inputArray[k+1] = inputArray[k];
      k = k-1;
    }
    inputArray[k+1]=key;
  }
  return inputArray.toString();
}

$(document).ready(function(){



});
