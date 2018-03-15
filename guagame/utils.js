var ImageFromPath = function(path){
	var img = new Image()
	img.src = path
	return img
}
// 判断碰撞函数
var rectIntersects = function(a, b) {
	var o = a;
	if(b.y > o.y && b.y < o.y + o.image.height){
		if(b.x > o.x && b.x < o.x + o.image.width){
        	return true;
		}
	}
    return false;
}
