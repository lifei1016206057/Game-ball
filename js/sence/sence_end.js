/**
 * Created by lifei on 2017/10/10.
 */


class Sence_end extends Sence_base {
    constructor(game) {
        super(game)

    log("游戏结束")
        this.gameover = Information("游戏结束,点击 r 从新开始", 200, 200);


        this.game.registryAction("r", () => {
            Const.senceTitle = new Sence_title(this.game);
            this.game.replaceSence(Const.senceTitle)
        })
    }
    draw() {
        this.game.drawText(this.gameover);
    }
}

// var Sence_end = function(game) {
//     log("结束")
//     var s = {

//     }

//     var gameover = Information("游戏结束,点击 r 从新开始", 200, 200)
//     s.clear = function() {
//         game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
//     }

//     s.draw = function() {
//         game.drawText(gameover);
//     }

//     s.update = function() {

//     }


//     game.registryAction("r", function() {
//         Const.senceTitle = new Sence_title(game);
//         game.replaceSence(Const.senceTitle)
//     })

//     return s;
// }