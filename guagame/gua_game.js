class GuaGame {
    constructor(fps, images, gameCallback) {
            window.fps = fps
            this.images = images
            this.gameCallback = gameCallback
            this.scene = null
            this.actions = {}
            this.keydowns = {}
            this.canvas = document.querySelector('#id-canvas')
            this.context = this.canvas.getContext('2d')
                //event
            var self = this
            window.addEventListener('keydown', (event) => {
                this.keydowns[event.key] = true
            })
            window.addEventListener('keyup', function(event) {
                self.keydowns[event.key] = false
            })
            this.init()
        }
        // static
    static instance(...arg) {
        this.i = this.i || new this(...arg)
        return this.i
    }
    drawImage(img) {
        this.context.drawImage(img.texture, img.x, img.y)
    }
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    update() {
        this.scene.update()
    }
    draw() {
        this.scene.draw()
    }
    runloop() {
        // body...
        // events 
        var g = this
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i];
            if (g.keydowns[key]) {
                // key dowm action
                g.actions[key]()
            }
        }
        g.update && g.update();
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);

        // draw
        g.draw();
        setTimeout(function() {
            g.runloop();
        }, 1000 / window.fps)
    }
    init() {
        var loads = [];
        var g = this
            // 预先载入所有图片
        var names = Object.keys(g.images);
        // console.log(names)
        for (let i = 0; i < names.length; i++) {
            let name = names[i];
            let path = g.images[name];
            let img = new Image();
            img.src = path;
            img.onload = function() {
                // body...
                g.images[name] = img;
                loads.push(1);
                if (loads.length == names.length) {
                    g.run();
                }
            }
        }
    }

    textureByName(name) {
        var img = this.images[name];
        // var image = {
        //     w: img.width,
        //     h: img.height,
        //     image: img,
        // }
        // console.log(img)
        return img;
    }

    runWithScene(scene) {
        // body...
        // game begin
        this.test = { test: 123123 }
        this.scene = scene
        setTimeout(() => {
            this.runloop();
        }, 1000 / window.fps)
    }

    replaceScene(scene) {
        this.scene = scene
    }
    run(scene) {
        this.gameCallback(this)
    }

}