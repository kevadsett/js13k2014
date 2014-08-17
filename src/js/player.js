define(function(require) {
    var Vector = require('vector'),
        position = new Vector(480, 270),
        velocity = new Vector(0, 0),
        acceleration = new Vector(0, 0),
        gravity = new Vector(0, 1),
        speed = 3,
        radius = 25,
        Player = function(playerName) {
            gameEvents.on('update', this.update, this);
            gameEvents.on('render', this.render, this);
            gameEvents.on('press', onPress);
        };

    function onPress(pressX, pressY) {
        var angleToPress = Math.atan2(pressY - position.y, pressX - position.x);
        velocity = Vector.fromPolar(speed, angleToPress);
    }

    Player.prototype = {
        update: function(dt, windVector) {
            velocity.add(acceleration);
            velocity.scale(0.95);
            velocity.add(windVector.getScaled(dt));
            velocity.limit(10);
            position.add(velocity);
            if (position.y > 540) {
                position.y = 0;
            }
            if (position.y < 0) {
                position.y = 540;
            }
            if (position.x < 0) {
                position.x = 960;
            }
            if (position.x > 960) {
                position.x = 0;
            }

        },
        render: function(context) {
            context.save();
            context.translate(position.x, position.y);
            context.fillStyle = "#fa3da8";
            context.arc(0, 0, radius, 0, 2 * Math.PI, false);
            context.fill();
            context.restore();
        }
    };

    return Player;
});