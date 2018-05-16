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
	return 5
}

function findBy(array, findFn) {
	for (let i = 0; i < array.length; i++) {
		if(array[i] === findFn()) {
			return array[i];
        }
    }
return null
}

