//loop and function practice
//1
var f1 = function(){
	for (var i = 1; i <= 100; i++){
		console.log(i);
	}
}

//2
var f2 = function(){
	for (var i = 100; i >= 1; i--){
		console.log(i);
	}
}

//3
var f3 = function(){
	for (var i = 1; i <= 100; i++){
		if (i % 2 == 0){
			console.log(i);
		}
		
	}
}

//4
var f4 = function(){
	var array1 = [];
	for (var i = 0; i <= 9; i++){
		array1[i] = 'x';
	}
	console.log(array1);
}

//5
var f5 = function(){
	var array2 = [];
	for (var i = 0; i < 10; i++){
		array2[i] = i+1;
	}
	console.log(array2);
}

//6
var f6 = function(){
	var array2 = [];
	for (var i = 0; i < 10; i++){
		array2[i] = Math.random().toFixed(2);
	}
	console.log(array2);
}

//7
var f7 = function(){
	var array2 = [];

	function getRandomArbitary(min, max) {
		return Math.random() * (max - min) + min;
	}

	for (var i = 0; i < 10; i++){
		array2[i] = getRandomArbitary(1, 30).toFixed(2);
	}
	return array2;
}

//8
var f8 = function(){

	var arr = ['2','5','1','6','4','2','9','34','12','145','2','5','7','2','3','1029','34','4657','34','164'];

	for (var i = 0; i < arr.length; i++){
		if (arr[i] > 0 && arr[i] < 10) {
			console.log(arr[i])
		} 
	}
}

//9
var f9 = function(){

	var arr = ['2','1','6','4','2','9','34','12','145','2','7','2','3','1029','34','4657','34','164'];

	for (var i = 0; i < arr.length; i++){
		if (arr[i] == 5) {
			console.log('Есть!');
			break;
		}
	}
}

//10
var f10 = function(){

	var arr = ['2','1','6','4','2','9','34','12','145','2','7','2','3','1029','34','4657','34','164'];

	for (var i = 0; i < arr.length; i++){
		if (i % 2 == 0) {
			console.log(arr[i]);
		}
	}
}

//11
var f11 = function(){

	var arr = ['2','1','6','4','2','9','34','12','145','2','7','2','3','1029','34','4657','34','164'],
		result = 0;

	for (var i = 0; i < arr.length; i++){
		result += parseInt(arr[i]);
		console.log(result);
	}
	console.log(result);
}

//12
var f12 = function(){

	var arr = ['2','1','6','4','2','9','34','12','145','2','7','2','3','1029','34','4657','34','164'],
		result = 0;

	for (var i = 0; i < arr.length; i++){
		result += Math.pow(parseInt(arr[i]), 2);
		console.log(result);
	}
	console.log(result);
}

//13
var f13 = function(){

	var arr = ['2','1','6','4','2','9','34','12','145','2','7','2','3','1029','34','4657','34','164'],
		result = 0;

	for (var i = 0; i < arr.length; i++){
		result += parseInt(arr[i]);
	}
	console.log(result / (arr.length));
}

//14
var f14 = function(){

	var Fibonachi = [0,1];

	for (i = 0; i <= 17; i++){
		Fibonachi[i+2] = Fibonachi[i] + Fibonachi[i+1];
	}
	console.log(Fibonachi);

	
}
