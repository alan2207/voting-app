// extract options from the String
// returns an array of objects
exports.extractOptions = function(str) {
  return str.split(',').map(option => {
  	return {option: option, value: 0};
  });
}


// formating options, converting array of options objects
// to an array of options titles
exports.formatOptions = function(data) {
    return data.map(option => option.option)
}


// checks if the given array contains item - case insensitive;
// used to check for existing options - addoption route
exports.isInArray = function(array, item) {
	for(var i = 0; i < array.length; i++) {
		if(array[i].toLowerCase() === item.toLowerCase()) {
			return true;
		}
	}
	return false;
}


// find and update option in options array
exports.update = function(arr, option) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i].option === option) {
			arr[i].value++;
			break;
		}
	}
	return arr;
}


// updating voters array by adding current voter to the end of voters array
exports.updateVoters = function(arr, voter) {
  return arr.concat([voter]);
}
