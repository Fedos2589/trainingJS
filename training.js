function generateABC(){
	var abc = [],
		abc1 = [],
		numbers = [],
		password = '',
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