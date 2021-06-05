//Block class. Created block. Tho change shape extend.
//Could be used from scratch. Picture is optional


export class Block {

        constructor(_x, _y, _width, _height, _color, _image = undefined) {

                this.x = _x;
                this.y = _y;
                this.width = _width;
                this.height = _height / 2;
                this.color = _color;
                if (_image) {
                        this.backgound = new Image();
                        this.backgound.src = _image;
                }
        }

        draw(ctx) {

                try {
                        ctx.drawImage(this.backgound, this.x, this.y, this.width, this.height);
                } catch(e) {
                        ctx.fillStyle = this.color;
                        ctx.fillRect(this.x, this.y, this.width, this.height);
                }
        }

        move(vx, vy, mx = undefined, my = undefined) {
                if (mx) {
                        if ((this.x + this.width + vx > mx) || this.x + vx < 0) {
                                return;
                        }
                }
                if (my) {
                        if (this.y + this.height + vy > my || this.y + vy < 0) {
                                return;
                        }
                }
                this.x += vx;
                this.y += vy;
        }

        remove(ctx) {
                ctx.clearRect(this.x, this.y, this.width, this.height);
        }
}
