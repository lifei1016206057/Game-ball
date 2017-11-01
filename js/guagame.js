/**
 * Created by lifei on 2017/10/2.
 */

//画布对象

class GuaGame {
    constructor(select) {
        this.canvas = document.querySelector(select)
        this.context = this.canvas.getContext("2d")
        this.actions = {}
        this.keydowns = {}
        this.stop = false

              //当点击按键的时候,存储状态;
        window.addEventListener("keydown", (event) => {
            this.keydowns[event.key] = true;    //按下按键,存储状态;
        })
        window.addEventListener("keyup",  (event) => {
            this.keydowns[event.key] = false;    //按下按键,存储状态;
        })
        this.__init()
    }

    pause() {
        this.stop = !this.stop;
    }
    registryAction(k, callback) {
        this.actions[k] = callback;
    }

    drawImage(paddle) {
        var o = this;
        o.context.drawImage(paddle.image, paddle.x, paddle.y, paddle.width, paddle.height)
    }
    drawText(information) {
        var o = this;
        o.context.font = "20px Georgia";
        o.context.fillText(information.text, information.x, information.y)
    }

    //将sence传递过来当sence赋值给o
    replaceSence(sence) {
        this.sence = sence;
    }

    //跳到新的关卡
    newSence(blocks) {
        var blocks = blocks || []
      
        if ( Const.sence_all === Const.sence_num) {
            Const.senceEnd = Const.senceEnd || new Sence_end(this);
            this.replaceSence(Const.senceEnd)
            Const.sence = null;
            return
        }

        Const.sence = new Sence(this, Const.sence_num);
        this.replaceSence(Const.sence)
        Const.senceTitle = null;
    }

    clear() {
        this.sence.clear()
    }
    update() {
        this.sence.update()
    }
    draw() {
        this.sence.draw()
    }

    __init() {
        var o = this;
        var setfps = function() {
            var actions = Object.keys(o.actions);
            for (var i=0; i< actions.length; i++) {
                var key = actions[i];
                if (o.keydowns[key]) {
                    o.actions[key]();
                }
            }

            o.clear()

            o.update && o.update()

            o.draw();
            setTimeout(function() {
                setfps();
            }, 1000/Const.fps)
        }
        setTimeout(function() {
            setfps();
        }, 1000/Const.fps)
    }

}

// var GuaGame = function(select) {
//     var canvas = document.querySelector(select);
//     var context = canvas.getContext("2d");
//     var o = {
//         canvas: canvas,
//         context: context,
//         actions: {},    //存的是key和回调函数,如果a被按下那么执行o.actions[a]函数;
//         keydowns: {},   //存储哪些按键被按下;按键的状态;属性值用按键a,b,c表示
//         stop: false,
//     }

//     //当点击按键的时候,存储状态;
//     window.addEventListener("keydown", function (event) {
//         o.keydowns[event.key] = true;    //按下按键,存储状态;
//     })
//     window.addEventListener("keyup", function (event) {
//         o.keydowns[event.key] = false;    //按下按键,存储状态;
//     })

//     o.pause = function() {
//         o.stop = !o.stop;
//     }

//     //注册事件
//     o.registryAction = function(k, callback) {
//         o.actions[k] = callback;
//     }

//     o.drawImage = function(paddle) {
//         o.context.drawImage(paddle.image, paddle.x, paddle.y, paddle.width, paddle.height)
//     }
//     o.drawText = function(information) {
//         o.context.font = "20px Georgia";
//         o.context.fillText(information.text, information.x, information.y)
//     }

//     //将sence传递过来当sence赋值给o
//     o.replaceSence = function(sence) {
//         o.sence = sence;
//     }

//     o.clear = function() {
//         o.sence.clear()
//     }
//     o.update = function() {
//         o.sence.update()
//     }
//     o.draw = function() {
//         o.sence.draw()
//     }


//     var setfps = function() {
//         var actions = Object.keys(o.actions);
//         for (var i=0; i< actions.length; i++) {
//             var key = actions[i];
//             if (o.keydowns[key]) {
//                 o.actions[key]();
//             }
//         }

//         o.clear()

//         o.update && o.update()

//         o.draw();
//         setTimeout(function() {
//             setfps();
//         }, 1000/Const.fps)
//     }
//     setTimeout(function() {
//         setfps();
//     }, 1000/Const.fps)
//     return o;
// }
