var fibArray = [1,1,2,3,5,8,13,21,34,55];
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
//Input
function derivative(inputFunction,x,dx){
  f = inputFunction;
  result = (f(x+dx)-f(x))/dx
  return result;
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
    randArray.push(appendMe);
  }
  return randArray;
}

function selectorFunction(valToCalculate, selector){
  if(selector==1){
    return fibIterator(valToCalculate);
  } else if(selector==2){
    var result = insertSort(stringArrayToArray(valToCalculate));
    return "[" + result + "]";
  } else if(selector==4) {
    fibArray = [];
    return fibArrayWithFibIterator(valToCalculate);

  } else {
    return 1;
  }
}
function stringArrayToArray(inputArray){
  // inputArray = inputArray.substring(1, inputArray.length-1);
  return JSON.parse(inputArray);
}
function drawRectange(canvas){
  canvas.clearRect(0,0,canvas.width,canvas.height);
  var arrLength = fibArray.length;
  var s;
  var size = 10;
  var lastS = size;
  var x = 100;
  var y = 100;

  canvas.rect(0,0,size,size);

  for(var i=1; i <arrLength; i++){
    s = fibArray[i]*size;
    if(i%2 != 0){
      canvas.rect(0,lastS,s,s);
    } else {
      canvas.rect(lastS,0,s,s);
    }
    lastS = s;
  }
  canvas.stroke();
}
$(document).ready(function(){
  $("#operators").change(function(){
    operator = $("#operators").val();
    if(operator==1){
      $("#num1Div label").text("Enter an Iteration of the Fibonacci Sequence you want to know!");
    } else if(operator==2){
      $("#num1Div label").text("Enter an Array to Sort!");
    } else if(operator==4) {
      $("#num1Div label").text("Enter an Iteration of the Fibonacci Sequence to go up to!");
    } else {
      $("#num1Div label").text("Enter an equation you want to find the roots of.");
    }
  });
  $("form#calculate").submit(function(event) {
    event.preventDefault();
    var num1 = $("#num1").val();
    var result = ""
    result = selectorFunction(num1,operator);
    alert(result);
  });
  $("button#disp").click(function(event) {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.font = "10px Arial";
    drawRectange(ctx);
  });
});
