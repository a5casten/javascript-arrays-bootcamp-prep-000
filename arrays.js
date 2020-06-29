var chocolateBars =["snickers","hundred grand","kit kat","skittles"];

function addElementToBeginningOfArray(newData) {
  var newChocolateBars =[newData ...chocolateBars]
  
}

function destructivelyAddElementToBeginningOfArray(newData) {
  chocolateBars.unshift(newData)
  return chocolateBars;
}