var chocolateBars =["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element) {
  var newChocolateBars =[element, ...array]
  return newChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(element) {
  chocolateBars.unshift(element)
  return chocolateBars;
}

function addElementToEndOfArray(array, element) {
  var newChocolateBars =[...array, element]
  return newChocolateBars;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}