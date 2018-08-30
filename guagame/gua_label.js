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