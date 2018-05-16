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
	const c = Math.floor(Math.random() * 100);
	return c;
}

function findBy(array, findFn) {
	for (let i = 0; i < array.length; i++) {
		if(array[i] === findFn()) {
			return array[i];
        }
    } else {
        return null
    }
}

