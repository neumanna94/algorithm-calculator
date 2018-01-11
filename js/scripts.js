var fibArray = [];
var randArray = [];
var operator = 1;
//Finds nth iteration
function fibIterator(inputIteration){
  if (inputIteration <= 1){
    return inputIteration;
  }
  return fibIterator(inputIteration-1) + fibIterator(inputIteration-2);
}
//Creates a Fibonacci Array using fibIterator
function fibArrayWithFibIterator(inputIteration){
  for(var i = 1; i <= inputIteration; i ++){
    var pushMe = fibIterator(i);
    fibArray.push(pushMe);
  }
  return fibArray;
}

function newtonApproximation(inputEquation) {
  return 1;
}
//https://www.geeksforgeeks.org/insertion-sort/
function insertSort(inputArray){
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

function randArrayGenerator (size, maxNumber){
  var appendMe;
  for(var i = 1; i < size; i ++){
    appendMe = Math.round(Math.rand()*MaxNumber)
  }
  randArray.push(appendMe);
  return randArray;
}

function selectorFunction(valToCalculate, selector){
  if(selector==1){
    return fibIterator(valToCalculate);
  } else if(selector==2){
    var result = insertSort(stringArrayToArray(valToCalculate));
    return "[" + result + "]";
  } else {
    return newtonApproximation(valToCalculate);
  }
}

function stringArrayToArray(inputArray){
  // inputArray = inputArray.substring(1, inputArray.length-1);
  return JSON.parse(inputArray);
}

$(document).ready(function(){
  $("#operators").change(function(){
    operator = $("#operators").val();
    console.log(operator);
    if(operator==1){
      $("#num1Div label").text("Enter an Iteration of the Fibonacci Sequence you want to know!");
    } else if(operator==2){
      $("#num1Div label").text("Enter an Array to Sort!");
    } else {
      $("#num1Div label").text("Enter an equation you want to find the roots of.");
    }
  });
  $("form#calculate").submit(function(event) {
    event.preventDefault();
    var num1 = $("#num1").val();
    console.log(num1);
    console.log(operator);
    alert(selectorFunction(num1, operator));
  });
});
