// 剥离代码
// var bulletFires = []
var boomIndex = 0
class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        // this.bg = new GuaImage(this.game, 'bg')
        this.numberOfEnemies = 1
            // this.bg = new Background(this.game)
        this.player = new Player(this.game)
        this.grounds = []
        for (var i = 0; i < 2; i++) {
            var bg = new Background(this.game)
            bg.x = 0
            bg.y = -568 * i
            this.addElement(bg)
            this.grounds.push(bg)
        }   
        // this.addElement(this.bg)
        this.addEnemies()
        this.player.x = 100
        this.player.y = 485
        this.addElement(this.player)
    }
    addEnemies() {
        var es = []
            // setInterval(() => {
            //     var e = new Enemy(this.game)
            //     es.push(e)
            //     this.addElement(e)
            // }, 5000);
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = new Enemy(this.game)
            es.push(e)
            this.addElement(e)
        }
        window.enemies = es

    }
    setupInputs() {
        var g = this.game
        var s = this
        g.registerAction('w', function() {
            s.player.moveUp()
        })
        g.registerAction('s', function() {
            s.player.moveDown()
        })
        g.registerAction('a', function() {
            s.player.moveLeft()
        })
        g.registerAction('d', function() {
            s.player.moveRight()
        })
        g.registerAction('f', function() {
            s.player.fire()
        })
    }
    update() {
        super.update()
        for (var i = 0; i < 2; i++) {
            var bg = this.grounds[i]
            bg.y += 2
            if (bg.y > 560) {
                bg.y = -568
            }
        }

        for (var i = 0; i < window.enemies.length; i++) {
            if (this.player.collide(window.enemies[i])) {
                var ps = new GuaParticleSystem(this.game)
                ps.x = window.enemies[i].x + window.enemies[i].w / 2
                ps.y = window.enemies[i].y + window.enemies[i].h / 2
                this.addElement(ps)
                    // this.boomIndex++
                window.enemies[i].die()
                this.player.lifeDown()
            }
        }


    }
    draw() {
        super.draw()
        this.game.context.fillText("灭敌数： " + boomIndex, 20, 535);
        this.game.context.fillText("生命值： " + this.player.life, 20, 550);
    }
}

class Background extends GuaImage {
    constructor(game) {
        super(game, 'bg')
        this.setup()
    }
    setup() {
        this.speed = 1
    }
    update() {
        // this.y += this.speed

    }
}

class Bullet extends GuaImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }
    setup() {
        this.speed = 5
    }
    update() {
        this.y -= this.speed
        for (var i = 0; i < window.enemies.length; i++) {
            if (this.collide(window.enemies[i])) {
                var ps = new GuaParticleSystem(this.game)
                ps.x = window.enemies[i].x + window.enemies[i].w / 2
                ps.y = window.enemies[i].y + window.enemies[i].h / 2
                this.scene.addElement(ps)
                window.enemies[i].die()
                boomIndex++
                // this.player.lifeDown()
                this.scene.removeElement(this)
            }

        }
        if (this.y < 0) {
            return
        }
    }
}

// 玩家
class Player extends GuaImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }
    setup() {
        this.speed = 10
        this.cooldown = 0
        this.life = 3
    }
    moveLeft() {
        this.x -= this.speed
        if (this.x < 0) {
            this.x = 0
        }
    }
    moveRight() {
        this.x += this.speed
        if (this.x > 320 - this.w) {
            this.x = 320 - this.w
        }
    }
    moveDown() {
        this.y += this.speed
        if (this.y > 568 - this.h) {
            this.y = 568 - this.h
        }
    }   
    moveUp() {
        this.y -= this.speed
        if (this.y < 0) {
            this.y = 0
        }
    }
    lifeDown() {
        this.life--
            if (this.life < 0) {
                var s = new SceneEnd(this.game)
                this.game.replaceScene(s)
            }
            // console.log("飞机的生命值：", this.life)
    }
    update() {
        if (this.cooldown > 0) {
            this.cooldown--
        }
    }

    fire() {
        if (this.cooldown == 0) {
            this.cooldown = 5
            var x = this.x + this.w / 2 - 2
            var y = this.y - 10
            var b = new Bullet(this.game)
            b.x = x
            b.y = y
            this.scene.addElement(b)   // 获取父类的addElement
        }
    }
}


const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}
    // 敌🐔


class Enemy extends GuaImage {
    constructor(game) {
        var type = randomBetween(0, 2)
        var name = 'enemy' + type
        super(game, name)
        this.setup()
    }
    setup() {
        this.speed = randomBetween(5, 10)
        this.x = randomBetween(0, 300)
        this.y = -randomBetween(100, 600)
    }
    update() {
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }
    }
    die() {
        this.setup()
    }
}