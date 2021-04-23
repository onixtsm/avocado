// Keyboard input with customisable repeat (set to 0 for no key repeat)
// usage
/**
KeyboardController({
    "32, 64": {------"-----}
    32: {interval:0, callback: startGame },
    37: {interval:10, callback: function() { padSpeed -= 5; } },
    39: {interval:10, callback: function() { padSpeed += 5; } }
});
*/

export function keyboardController(keyset) {
        // Lookup of key codes to timer ID, or null for no repeat
        //
        var timers = {};

        var keys = Object.keys(keyset)


        // When key is pressed and we don't already think it's pressed, call the
        // key action callback and set a timer to generate another one after a delay
        //
        document.onkeydown = function (event) {
                var key = (event || window.event).keyCode;
                if (!(keys.toString().includes(key)))
                        return true;
                if (!(Object.keys(timers).toString().includes(key))) {
                        for (var i = 0; i < keys.length; i++) {
                                if (keys[i].includes(key))
                                        key = keys[i];
                        }
                        timers[key] = null;
                        keyset[key].callback();
                        if (keyset[key].interval !== 0)
                                timers[key] = setInterval(keyset[key].callback, keyset[key].interval);
                }

                return false;

        };

        // Cancel timeout and mark key as released on keyup
        //
        document.onkeyup = function (event) {
                var key = (event || window.event).keyCode;
                if (Object.keys(timers).toString().includes(key)) {
                        for (var i = 0; i < keys.length; i++) {
                                if (keys[i].includes(key))
                                        key = keys[i];
                        }
                        if (timers[key] !== null)
                                clearInterval(timers[key]);
                        delete timers[key];
                }
        };

        // When window is unfocused we may not get key events. To prevent this
        // causing a key to 'get stuck down', cancel all held keys
        //
        window.onblur = function () {
                for (key in timers)
                        if (timers[key] !== null)
                                clearInterval(timers[key]);
                timers = {};
        };
};
