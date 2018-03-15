// 封装
var _main = function() {
    var images = {
        bullet: './img/bullet.png',
        bg: './img/bg.png',
        player: './img/player.gif',
        enemy0: './img/enemy0.png',
        enemy1: './img/enemy1.png',
        enemy2: './img/enemy2.png',
        fire: './img/fire.png',
    }
    var game = GuaGame.instance(30, images, function(g) {
        // var scene = new Scene(game);
        // 改写 new
        var scene = new SceneTitle(game);
        // var scene = SceneTitle.new(game);
        g.runWithScene(scene)
    });
}
_main();