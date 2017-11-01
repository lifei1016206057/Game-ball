/**
 * Created by lifei on 2017/10/2.
 */

//撞球对象
var Ball = function() {
    var image = imageFormPath("img/ball.png");
    var o = {
        x: 150,
        y: 200,
        width: 10,
        height: 10,
        speedX: 5,
        speedY: 5,
        image: image,
        fired: false,
        enabledrag: false,
    }
    o.fire = function() {
        this.fired = true
    }
    o.move = function() {
        if (o.fired) {
            if (o.x < 0 || o.x > Const.width) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y > Const.height) {
                o.speedY *= -1
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.rebound = function() {    //反弹
        o.speedY *= -1;
    }
    o.haspoint = function(x, y) {
        var xIn = x >= o.x && x <= o.x + o.width;
        var yIn = y >= o.y && y <= o.y + o.height;
        return xIn && yIn;
    }
    return o;
}
