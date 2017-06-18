//drag
/*
var wrap = document.querySelector('.wrap'),
	block = document.querySelector('.block'),
	allowDrag = false,
	coords = {},
	borderWidth = 4;
	

	block.addEventListener('mousedown', function(e){
		allowDrag = true;
		var wrapRect = wrap.getBoundingClientRect(),
			blockRect = block.getBoundingClientRect();

		coords.block = {
			offsetLeft : blockRect.left,
			offsetTop : blockRect.top,
			clickedX : e.layerX,
			clickedY : e.layerY,
			blockWidth : blockRect.width,
			blockHeight : blockRect.height,
		};

		coords.wrap = {
			offsetLeft : wrapRect.left,
			offsetTop : wrapRect.top,
			wrapWidth : wrapRect.width,
			wrapHeight : wrapRect.height,
		}
	});

	document.addEventListener('mousemove', function(e){
		if (allowDrag){
			var blockPositionX = e.pageX - coords.wrap.offsetLeft - coords.block.clickedX,
				blockPositionY = e.pageY - coords.wrap.offsetTop - coords.block.clickedX;
		}

		if (blockPositionX < 0){
			blockPositionX = 0;
		}

		if (blockPositionY < 0){
			blockPositionY = 0;
		}

		if (blockPositionX > coords.wrap.wrapWidth - coords.block.blockWidth){
			blockPositionX = coords.wrap.wrapWidth - coords.block.blockWidth - borderWidth;
		}

		if (blockPositionY > coords.wrap.wrapHeight - coords.block.blockHeight){
			blockPositionY = coords.wrap.wrapHeight - coords.block.blockHeight - borderWidth;
		}

		block.style.top = blockPositionY + 'px';
		block.style.left = blockPositionX + 'px';
	});

	document.addEventListener('mouseup', function(){
		allowDrag = false;

	});
*/

//painted blocks

(function(){
	var numberInput = document.querySelector('.number__input'),
		colorInput = document.querySelector('.color__input'),
		container = document.querySelector('.container'),
		isOdd = true;

	numberInput.addEventListener('input', function(){
		var value = this.value,
			blocksHTML = '';
		

		for (var i = 0; i < value; i++){
			var block = document.createElement('div');
			block.className = 'block__item';
			block.innerText = i + 1; 
			blocksHTML += block.outerHTML;
		}

		container.innerHTML = blocksHTML;
	})

	colorInput.addEventListener('change', function(){
		var colorValue = this.value,
			elems = container.children;

		if (isOdd){
			isOdd = false;
		} else{
			isOdd = true;
		}

		for (var i=0; i<elems.length; i++){

			if (isOdd && i % 2 == 0){
				elems[i].style.background = colorValue;
			}

			if (!isOdd && i % 2 !== 0){
				elems[i].style.background = colorValue;
			}
		}
		console.log(colorValue);
	})
}());

//game

(function(){
	var game = document.querySelector('.game'),
		numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
		arrLength = numArray.length;
	var	blackDot;

	for (var i = 0; i < arrLength; i++){
		var randomInt = getRandomInt(0, numArray.length);
		createBlock(numArray[randomInt]);
		numArray.splice(randomInt,1);
	}

	createBlock('', 'game__item_black');

	function createBlock(text, additionClass){
		var GameBlock = document.createElement('div');

		GameBlock.className = 'game__item';

		if (additionClass){
			GameBlock.classList.add(additionClass);
		}

		GameBlock.innerText = text;

		game.appendChild(GameBlock);
	}

	game.addEventListener('click', function(e){
		var elem = e.target;

		if (elem.className == 'game__item'){
			if (blackDot.classList.contains('game__item_active')){
				blackDot.innerText = elem.innerText,
				blackDot.classList.remove('game__item_black', 'game__item_active'),
				elem.classList.add('game__item_black');
			}
		}

		if (elem.classList.contains('game__item_black')){
			elem.classList.toggle('game__item_active'),
			blackDot = elem;
		}
	})

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}
}());