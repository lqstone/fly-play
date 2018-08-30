// 继承GuaScene
class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
            // var label = new GuaLabel(game, "hello")
            // this.addElement(label)
            // var ps = new GuaParticleSystem(game)
            // this.addElement(ps)
        // game.registerAction('k', function() {
        //     var s = new Scene(game)
        //     game.replaceScene(s)
        // })
        var w = new GuaAnimation(game)
        this.w = w
        this.addElement(w)
        this.setupInputs()
    }
    // draw() {
    //     // super.draw()
    //     // this.game.context.font = "16px serif";
    //     // this.game.context.fillText("press K  game begin! ", 100, 400);
    // }
    setupInputs() {
        this.game.registerAction('a', (keyStatus) => {
            this.w.move(-5, keyStatus)
        })
        this.game.registerAction('d', (keyStatus) => {
            this.w.move(5, keyStatus)
        })
    }
}

