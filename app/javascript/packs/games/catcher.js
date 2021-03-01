var canvas
var ctx
var step = 10;
$(document).ready(function() {
	canvas = document.getElementById("main_canvas");
	ctx = canvas.getContext("2d");
	start();
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



function start() {
	var eater = new BigBlock(20, "pink");
	var smallBlocks = [];
	setInterval(function() { game(eater, smallBlocks); }, 1000/16);
	addEventListener("keydown", function(key) { eater.move(key) } ); 
}
function game(e, smallBlocks) {
	e.draw();
	if (smallBlocks.length == 0) {
		var block = new SmallBlock(10, "red");
		smallBlocks.push(block);
		console.log(block)
	}
	for (i = 0; i < smallBlocks.length; i++) {
		let b = smallBlocks[i]
		b.fall(0, 5);
		if (b.x + b.width >= e.x && b.x <= e.x + e.width) {
			if (b.y >= e.y && b.y <= e.y) {
				b.remove();
				smallBlocks.splice(i, 1);
			};
		};
		if (b.y >= canvas.height) {
			b.remove();
			smallBlocks.splice(i, 1);

		};
	};
};


