/**
 * Created by lifei on 2017/10/2.
 */
//挡板对象
var Paddle = function() {
    var image = imageFormPath("img/panel.png");
    var o = {
        x: 150,
        y: 250,
        width: 70,
        height: 10,
        speed: 5,
        image: image,
    }
    o.moveLeft = function() {
        o.x -= o.speed;
        o.move();
    }
    o.moveRight = function() {
        o.x += o.speed;
        o.move();
    }
    o.collide = function(ball) {
        if (ball.y + ball.image.height > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.width) {
                return true;
            }
        }
        return false;
    }
    o.move = function() {
        if (o.x < 0 ) {
            o.x = 0;
        }
        if (o.x > Const.width - o.width) {
            o.x = Const.width - o.width;
        }
    }

    return o;
}