class GuaImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
    }
    update() {

    }
    draw() {
        this.game.drawImage(this)
    }
    aInb(x, x1, x2) {
        return x >= x1 && x <= x2;
    }
    collide(otherThing) {
        var a = this
        var b = otherThing
        if (this.aInb(a.x, b.x, b.x + b.w) || this.aInb(b.x, a.x, a.x + a.w)) {
            if (this.aInb(a.y, b.y, b.y + b.h) || this.aInb(b.y, a.y, a.y + a.h)) {
                return true;
            }
        }
        return false;
    }
}

// 精髓