class GuaLabel {
    constructor(game, text) {
        this.game = game
        this.text = text
    }
    draw() {
        this.game.context.fillText(this.text, 200, 100);
    }
    update() {

    }
}

// 继承GuaScene
class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
            // var label = new GuaLabel(game, "hello")
            // this.addElement(label)
            // var ps = new GuaParticleSystem(game)
            // this.addElement(ps)
        game.registerAction('k', function() {
            var s = new Scene(game)
            game.replaceScene(s)
        })
    }
    draw() {
        super.draw()
        this.game.context.font = "16px serif";
        this.game.context.fillText("press K  game begin! ", 100, 400);
    }
}

// 粒子爆炸类
class GuaParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }
    setup() {
        this.x = 150
        this.y = 200
        this.duration = 10
        this.numberOfparticles = 100
        this.particles = []
    }
    update() {
        // 添加火花
        this.duration--;
        if (this.particles.length < this.numberOfparticles) {
            var p = new Guaparticle(this.game)
            var vx = randomBetween(-10, 10)
            var vy = randomBetween(-10, 10)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        for (var p of this.particles) {
            p.update()
        }
        // 删除无生命的火花
        this.particles = this.particles.filter(p => p.life > 0)

    }
    draw() {
        if (this.duration < 0) {
            return
        }
        for (var p of this.particles) {
            p.draw()
        }
    }
}

class Guaparticle extends GuaImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }
    setup() {
        this.life = 4
    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    update() {
        this.life--;
        this.x += this.vx
        this.y += this.vy
        this.vx += 0.01 * this.vx
        this.vy += 0.01 * this.vy
    }
}