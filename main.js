// 封装
window.log = console.log.bind(console)
var _main = function() {
    var images = {
        bullet: './img/bullet.png',
        bg: './img/bg.png',
        player: './img/player.gif',
        enemy0: './img/enemy0.png',
        enemy1: './img/enemy1.png',
        enemy2: './img/enemy2.png',
        fire: './img/fire.png',
        idle0: './img/idle/Idle__0.png',
        idle1: './img/idle/Idle__1.png',
        idle2: './img/idle/Idle__2.png',
        idle3: './img/idle/Idle__3.png',
        idle4: './img/idle/Idle__4.png',
        idle5: './img/idle/Idle__5.png',
        idle6: './img/idle/Idle__6.png',
        idle7: './img/idle/Idle__7.png',
        idle8: './img/idle/Idle__8.png',
        idle9: './img/idle/Idle__9.png',
        run0: './img/run/Run__0.png',
        run1: './img/run/Run__1.png',
        run2: './img/run/Run__2.png',
        run3: './img/run/Run__3.png',
        run4: './img/run/Run__4.png',
        run5: './img/run/Run__5.png',
        run6: './img/run/Run__6.png',
        run7: './img/run/Run__7.png',
        run8: './img/run/Run__8.png',
        run9: './img/run/Run__9.png',
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