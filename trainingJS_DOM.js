//drag

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


