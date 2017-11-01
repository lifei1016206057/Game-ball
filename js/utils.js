/**
 * Created by lifei on 2017/10/2.
 */

//通用函数
var log = console.log.bind(console);

var imageFormPath = function(path) {
    var img = new Image();
    img.src = path;
    return img;
}

//碰撞函数
var rectIntersects = function(a, b) {
    if (a.x > b.x && a.x < b.x + b.width) {
        if (a.y > b.y && a.y < b.y + b.height) {
            log("相撞")
            return true;
        }
    }
    return false;
}