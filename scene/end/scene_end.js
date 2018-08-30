// 继承GuaScene
class SceneEnd extends GuaScene { 
    constructor(game) {
        super(game)
        game.registerAction('r', function() {
            var s = new Scene(game)
            game.replaceScene(s)
        })
    }
    draw() {
        super.draw()
        this.game.context.font = "16px serif";
        this.game.context.fillText("GAME OVER! press R  Restart! ", 60, 400);
    }
}