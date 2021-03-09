var canvas, ctx, points, HP, eater
var step = 10;
$().ready(function() {
	canvas = document.getElementById("main_canvas");
	ctx = canvas.getContext("2d");
});
class Block {
	constructor(_size, _color) {
		this.width = _size;
		this.height = _size / 2;
		this.color = _color;
};

	draw() {

		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);

	};

	remove() {
		ctx.clearRect(this.x, this.y, this.width, this.height)


	};

};

class BigBlock extends Block {
	constructor(_size, _color) {
		super(_size, _color);
		this.x = canvas.width / 2 - _size / 2;
		this.y = canvas.height - _size / 2;
		};
	//movement
	move(key) {
		ctx.clearRect(this.x, this.y, this.width, this.height);
		if (!(this.x - step < 0)) {
			if (key.keyCode == 37 || key.keyCode == 72 || key.keyCode == 65) {
				this.x -= step;
			}
		}
		if (this.x < canvas.width - this.width) {
			if (key.keyCode == 39 || key.keyCode == 76 || key.keyCode == 68) {
				this.x += step;
			}
		};
		this.draw();
		
	};

}; 
class SmallBlock extends Block {
	constructor(_size, _color) {
		super(_size, _color);
		this.x = Math.floor(Math.random() * (canvas.width - _size));
		this.y = -_size 
		};
	fall(vx, vy) {
		ctx.clearRect(this.x, this.y, this.width, this.height)
		this.x = this.x + vx;
		this.y = this.y + vy;
		this.draw();
		
	};
};

function winPoint() {
	points++
	//$("pointCounter").html(points + " points")
	(document).getElementById("pointCounter").innerHTML = points + " points"
}

function loseHP() {
	HP--
	//$("HPcounter").html(HP);
	(document).getElementById("HPcounter").innerHTML = HP
};

window.start = function() {
	points = 0;
	HP = 3;
	$("[name='button']").hide();
	//$("pointCounter").html(points + " points")
	//$("HPcounter").html(HP);
	eater = new BigBlock(20, "pink");
	var smallBlocks = [];
	interval = setInterval(function() { game(eater, smallBlocks); }, 1000/16);
	document.addEventListener("keydown", function(key) { eater.move(key) } , true); 
}
function game(e, smallBlocks) {
	eater.draw();
	if (smallBlocks.length == 0) {
		var block = new SmallBlock(10, "red");
		smallBlocks.push(block);
	}
	for (i = 0; i < smallBlocks.length; i++) {
		if (HP == 0) {
			clearInterval(interval);
			$("[name='button']").show();
			HP = 3;
			points = 0
			eater = undefined;
			break;
		}
		let b = smallBlocks[i]
		b.fall(0, 5);
		if (b.x + b.width >= eater.x && b.x <= eater.x + eater.width) {
			if (b.y >= eater.y && b.y <= eater.y) {
				b.remove();
				smallBlocks.splice(i, 1);
				winPoint();
			};
		};
		if (b.y >= canvas.height) {
			b.remove();
			smallBlocks.splice(i, 1);
			loseHP();

		};
	};
};


