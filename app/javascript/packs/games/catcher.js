var canvas, ctx, points, HP, eater, started;
var step = 10;
$().ready(function() {
	canvas = document.getElementById("main_canvas");
	ctx = canvas.getContext("2d");
	document.addEventListener("keydown", function(key) { 
		if (started) {
			eater.move(key);
		}
	}); 
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
		key.preventDefault();
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

window.start = function() {
	started = true;
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	points = 0;
	HP = 3;
	$("[name='button']").hide();
	eater = new BigBlock(20, "pink");
	var smallBlocks = [];
	interval = setInterval(function() { game(smallBlocks); }, 1000/16);
	canvas.focus();
}
function game(smallBlocks) {
	eater.draw();
	$("#pointCounter").text(points);
	$("#HPcounter").text(HP);
	if (smallBlocks.length == 0) {
		var block = new SmallBlock(10, "red");
		smallBlocks.push(block);
	}
	for (i = 0; i < smallBlocks.length; i++) {
		if (HP == 0) {
			started = !started
			clearInterval(interval);
			$("[name='button']").show();
			return;
		}
		let b = smallBlocks[i]
		b.fall(0, 5);
		if (b.x + b.width >= eater.x && b.x <= eater.x + eater.width) {
			if (b.y >= eater.y && b.y <= eater.y) {
				b.remove();
				smallBlocks.splice(i, 1);
				points++
			};
		};
		if (b.y >= canvas.height) {
			b.remove();
			smallBlocks.splice(i, 1);
			HP--

		};
	};
};


