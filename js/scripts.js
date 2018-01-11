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

var insertSort = function(inputArray){

}

$(document).ready(function(){





});
