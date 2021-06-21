import {Block} from "./block"
import {keyboardController} from "../shared/keys"

var canvas, ctx, ectx, points, HP, eater, interval;

$(document).ready(() => {
    canvas = document.getElementById("main_canvas");
    ctx = canvas.getContext("2d");
    ectx = document.getElementById("other_canvas").getContext("2d");

});

class SmallBlock extends Block {
    constructor(_size, _color) {
        super(null, null, _size, _size, _color);
        this.x = Math.floor(Math.random() * (canvas.width - _size));
        this.y = -_size
    };
}

class BigBlock extends Block {
    constructor(_size, _color) {
        super(null, null, _size * 2, _size / 2, _color);
        this.x = canvas.width / 2 - _size / 2;
        this.y = canvas.height - _size / 4;
    }
};

window.start = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ectx.clearRect(0, 0, canvas.width, canvas.height)
    points = 0;
    HP = 3;
    $("[name='button']").hide();
    eater = new BigBlock(20, "black");
    var smallBlocks = [];
    keyboardController({
        "65, 37, 72": {
            interval: 1000 / 32, callback: () => {
                eater.remove(ectx)
                eater.move(-7, 0, canvas.width, canvas.height);
                eater.draw(ectx);
            }
        },
        "68, 39, 76": {
            interval: 1000 / 32, callback: () => {
                eater.remove(ectx);
                eater.move(7, 0, canvas.width, canvas.height);
                eater.draw(ectx);
            }
        }
    })

    interval = setInterval(() => {
        game(smallBlocks);
    }, 1000 / 30);

    canvas.focus();
}

function game(smallBlocks) {
    eater.draw(ectx);
    $("#pointCounter").text(points);
    $("#HPcounter").text(HP);
    if (smallBlocks.length == 0) {
        var block = new SmallBlock(10, "black");
        smallBlocks.push(block);
    }

    for (var i = 0; i < smallBlocks.length; i++) {
        if (HP == 0) {
            clearInterval(interval);
            $("[name='button']").show();
            keyboardController({
                "65, 37, 72": {
                    interval: 1000 / 16, callback: () => {
                    }
                },
                "68, 39, 76": {
                    interval: 1000 / 16, callback: () => {
                    }
                }
            })
            return;
        }

        let b = smallBlocks[i]
        b.remove(ctx);
        b.move(0, 3);
        b.draw(ctx);

        if (b.x + b.width >= eater.x && b.x <= eater.x + eater.width) {
            if (b.y >= eater.y) {
                b.remove(ctx);
                smallBlocks.splice(i, 1);
                points++
            }
            ;
        }
        ;
        if (b.y >= canvas.height) {
            b.remove(ctx);
            smallBlocks.splice(i, 1);
            HP--

        }
        ;
    }
    ;
};


