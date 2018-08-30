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
            // 从scen中删除
            return
        }
        for (var p of this.particles) {
            p.draw()
        }
    }
}

// 粒子
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
        this.life--
        this.x += this.vx
        this.y += this.vy
        this.vx += 0.01 * this.vx
        this.vy += 0.01 * this.vy
    }
}