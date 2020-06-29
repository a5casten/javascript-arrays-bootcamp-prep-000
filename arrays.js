var chocolateBars =["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element) {
  var new =[element, ...array]
  return new;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element) {
  var new=[...array, element]
  return new;
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
  var new= array.slice(1)
  return new;
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromBegginingOfArray(array) {
  var new= array.slice(array.length-1)
  return new;
}