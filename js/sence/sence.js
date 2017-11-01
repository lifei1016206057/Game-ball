/**
 * Created by lifei on 2017/10/10.
 */

class Sence extends Sence_base {

    //i代表关卡数
    constructor(game, i) {      
        super(game)
       
        this.paddle = Paddle();
        this.ball = Ball();
        this.blocks = loadleve(i)

        //注册移动事件
        game.registryAction("a", () => {
            this.paddle.moveLeft();
        })
        game.registryAction("d", () => {
            this.paddle.moveRight();
        })
        game.registryAction("f", () => {
            this.ball.fire();
        })

        this.__initDrag()
    }

   
    update() {
        var ball = this.ball;
        var blocks = this.blocks
        var game = this.game
        var paddle = this.paddle         //判断是否gameover
        if (ball.y > Const.height) {
            Const.senceEnd = Const.senceEnd || new Sence_end(game);
            game.replaceSence(Const.senceEnd)
            Const.sence = null;
            return;
        }

        if (Const.paused) {     //暂停
            return;
        }
        ball.move();
        if (paddle.collide(ball)) { //判断小球与挡板相撞
            ball.rebound();
        }
        for (var j=0 ; j< blocks.length; j++) {    //判断小球与砖块相撞
            var block = blocks[j];
            if (block.collide(ball)) {
                block.kill();
                ball.rebound();

                blocks.life--
                log(blocks.life)
                if (blocks.life <= 0) {
                    Const.sence_num++
                    game.newSence(blocks)
                }
                log(blocks)
                log(blocks.life)

            }
        }
    }
    draw() {
        var ball = this.ball;
        var blocks = this.blocks
        var game = this.game
        var paddle = this.paddle 


        game.drawImage(paddle);

        for (var j=0 ; j< blocks.length; j++) {
            var block = blocks[j];
            if(block.alive) {
                game.drawImage(block);
            }
        }

        game.drawImage(ball);
    }

    __initDrag() {
        var ball = this.ball;
        var blocks = this.blocks
        var game = this.game
        var paddle = this.paddle 
         //小球拖拽
        game.canvas.addEventListener("mousedown", function(event) {
            var x = event.offsetX;
            var y = event.offsetY;
            if (ball.haspoint(x, y)) {
                ball.enabledrag = true;
                log("开始拖拽",  ball.enabledrag)
            }
        })
        game.canvas.addEventListener("mousemove", function(event) {
            var x = event.offsetX;
            var y = event.offsetY;
            if(ball.enabledrag) {
                ball.x = x;
                ball.y = y;
            }
        })
        game.canvas.addEventListener("mouseup", function(event) {
            log("up", event)
            ball.enabledrag = false;
        })
    }
}


// var Sence = function(game) {
//     log(123123)
//     log(game)
//     var s = {

//     }

//     var paddle = Paddle();
//     var ball = Ball();
//     blocks = loadleve(1)

//     //注册移动事件
//     game.registryAction("a", function() {
//         paddle.moveLeft();
//     })
//     game.registryAction("d", function() {
//         paddle.moveRight();
//     })
//     game.registryAction("f", function() {
//         ball.fire();
//     })

//     s.clear = function() {
//         game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
//     }

//     s.update = function() {

//         //判断是否gameover
//         if (ball.y > Const.height) {
//             Const.senceEnd = Const.senceEnd || new Sence_end(game);
//             game.replaceSence(Const.senceEnd)
//             Const.sence = null;
//             return;
//         }

//         if (Const.paused) {     //暂停
//             return;
//         }
//         ball.move();
//         if (paddle.collide(ball)) { //判断小球与挡板相撞
//             ball.rebound();
//         }
//         for (var j=0 ; j< blocks.length; j++) {    //判断小球与砖块相撞
//             var block = blocks[j];
//             if (block.collide(ball)) {
//                 block.kill();
//                 ball.rebound();
//             }
//         }
//     }
//     s.draw = function() {
//         game.drawImage(paddle);

//         for (var j=0 ; j< blocks.length; j++) {
//             var block = blocks[j];
//             if(block.alive) {
//                 game.drawImage(block);
//             }
//         }

//         game.drawImage(ball);
//     }


//     //小球拖拽
//     game.canvas.addEventListener("mousedown", function(event) {
//         var x = event.offsetX;
//         var y = event.offsetY;
//         if (ball.haspoint(x, y)) {
//             ball.enabledrag = true;
//             log("开始拖拽",  ball.enabledrag)
//         }
//     })
//     game.canvas.addEventListener("mousemove", function(event) {
//         var x = event.offsetX;
//         var y = event.offsetY;
//         if(ball.enabledrag) {
//             ball.x = x;
//             ball.y = y;
//         }
//     })
//     game.canvas.addEventListener("mouseup", function(event) {
//         log("up", event)
//         ball.enabledrag = false;
//     })

//     return s;
// }