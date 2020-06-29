var chocolateBars =["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element) {
  var array+1 =[element, ...array]
  return array+1;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element) {
  var array+1 =[...array, element]
  return array+1;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}

function accessElementInArray(array, index) {
  console.log(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

function removeElementFromBegginingOfArray(array) {
  var array+1 = array.slice(1)
  return array+1;
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromBegginingOfArray(array) {
  var array+1 = array.slice(array.length-1)
  return array+1;
}