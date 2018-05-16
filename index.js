function breakOut(array, changeValue, stopValue) {
  for(var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
    	break;
    } else {
		array[i] = changeValue;
    }
  }
return array;
}

function keepGoing(array, changeValue, skipValue) {
  for(var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findFn() {

function findBy(array, findFn) {
  for(var i = 0; i<array.length; i++) {
    if(array[i] === findFN()) {
      break;
    }
    return null;
  }
}

