
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var GameEngine = function() {
	var g = {}
	g.canvas = document.getElementById('myCanvas')
	g.context = g.canvas.getContext('2d')
	return g
}

var moveImg = function() {
	var img = new Image()
	img.src = './dd.jpg'
	return img
}

var __main = function(){

}


// context.font="30px Arial";
// context.fillText("Hello World",10,50);
// context.fillText('11', canvas.width/2 - 150, canvas.height/2 + 15)

// 事件

canvas.addEventListener('mousedown', function(event) {
	console.log(event)
})


// 矩形的绘制
// context.lineJoin = 'round'
// context.lineWidth = 1
// context.strokeRect(15, 30, 100, 50)
// context.fillRect(0, 0, 50, 50)
// context.clearRect(10, 10, 40, 40)
// 
// 
//  图片的绘制
var speed = 1

img.onload = function(e){
	console.log(e)
	context.drawImage(img, 0, 0, 60, 60)
	animateX()
}

var x = 0
var y = 0
function animateX() {
	x += speed
	if(x < 0 || x > 540){
		speed *= -1;
	}
    context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(img, x, 0, 60, 60)
	requestAnimationFrame(animateX)
}
