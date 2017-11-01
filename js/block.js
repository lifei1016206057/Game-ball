/**
 * Created by lifei on 2017/10/2.
 */
//砖块对象
var Block = function(data) {
    var image = imageFormPath("img/block.png");
    var o = {
        x: data.x,
        y: data.y,
        width: 50,
        height: 20,
        image: image,
        alive: true,
        lifes: data.life || 1
    }
    o.kill = function() {
        o.lifes--;
        if(o.lifes < 1) {
            o.alive = false;
        }
    }
    o.collide = function(ball) {
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o));
    }
    return o;
}