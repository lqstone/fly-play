class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
            // this.draw()
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(img) {
        img.scene = this   // 获取到this
        this.elements.push(img)
    }
    removeElement(img) {
        var index = this.elements.indexOf(img);
        this.elements.splice(index, 1);
    }
    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
                // this.game.drawImage(e)
            e.draw()
        }
    }
    update() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }
    }
}