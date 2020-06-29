var chocolateBars=[
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];

function addElementToBeginningOfArray(array, element) {
  var altered =[element, ...array];
  return altered;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var altered=[...array, element];
  return altered;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
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
  var altered= array.slice(1);
  return altered;
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromBegginingOfArray(array) {
  var altered= array.slice(array.length-1);
  return altered;
}