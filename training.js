// random password

function generateABC(){
	var abc = [],
		abc1 = [],
		numbers = [],
		n;

	for (var i = 97; i <= 122; i++){
		n = String.fromCharCode(i),
		abc.push(n);
	}

	for (var i = 65; i <= 90; i++){
		n = String.fromCharCode(i),
		abc1.push(n);
	}

	for (var i = 0; i <= 9; i++){
		numbers.push(i);
	}

	resultABC = abc.concat(abc1, numbers, '_');

	return resultABC;
}

function generatePassword(){

	var	password = '',
		symbols = generateABC();

	for (var i = 0; password.length < 10; i++){
		var RandomArrayIndex = Math.round(Math.random() * 100);
		if (RandomArrayIndex < symbols.length){
			password = password + resultABC[RandomArrayIndex]
		}
	}
	console.log(password);
}

//array of even numbers

function evenNumber(number){
	if (number % 2 == 0) {
		return true
	} else {
		return false
	}
}

var arr1 = [3, 13, 74, 14, 66, 15, 22, 4, 12, 23, 185, 249, 248, 4815, 23466],
	resultArr = [];

function ArrayOfEven(arr) {
	for (var i = 0; i < arr.length; i++){
		if (evenNumber(arr[i])){
			resultArr.push(arr[i])
		}
	}
	console.log(resultArr);
}

// 

function someNumbers(){
	var i,
	k,
	sumI = 0,
	result = [];

	for (i = 0; i <= 1000; i++){
		var splitI = i.toString().split('');

		for (k = 0; k < splitI.length; k++){
			sumI += parseInt(splitI[k], 10);
		}

		if (i % 3 == 0 && i % 5 !== 0 && sumI < 10){
			result.push(i);			
		}	
		sumI = 0;
	}
	console.log(result);
}