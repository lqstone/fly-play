class GuaAnimation {
	constructor(game) {
		this.game = game 
		// this.frames = []
		this.animationName = 'idle'
		this.animations = {
			idle: [],
			run: [],
		}
		for (let i = 0; i < 10; i++) {
			let name = `idle${i}`
			let t = game.textureByName(name)
			this.animations.idle.push(t)
		}
		for (let i = 0; i < 10; i++) {
			let name = `run${i}`
			let t = game.textureByName(name)
			this.animations.run.push(t)
		}

        this.x = 100
        this.y = 100
		this.texture = this.frames()[0]
        this.w = this.texture.width / 5
        this.h = this.texture.height / 5
        // log(1111, this.texture.width)
        // log(1111, this.texture.height)
		this.framesIndex = 0        	// 当前图片下标
		this.speed = 3 			    	// 默认速度
		this.flipX = false
		this.framesCount = this.speed  
	}

	frames() {
		return this.animations[this.animationName]
	}

	update() {
		this.framesCount--
		//  设置动画的定格图片
		if (this.framesCount === 0) {
			this.framesCount = this.speed
			this.framesIndex = (this.framesIndex + 1) % this.frames().length
			this.texture = this.frames()[this.framesIndex]
	        this.w = this.texture.width / 5
	        this.h = this.texture.height / 5
		}
	}
	
	flipImage(image, ctx) {

	    
	    ctx.save(); // Save the current state
		var x = image.x + image.w / 2 
	    ctx.scale(-1, 1); // Set scale to flip the image
	    ctx.translate(-x, 0)
	    image.game.drawImage(image); // draw the image
	    ctx.restore(); // Restore the last saved state
	}

	draw() {
		if (this.flipX) {
		 	this.game.context.save(); // Save the current state
			var x = this.x + this.w / 2 
		    this.game.context.translate(x, 0)
		    this.game.context.scale(-1, 1); // Set scale to flip the image
		    this.game.context.translate(-x, 0)
		    this.game.drawImage(this); // draw the image
		    this.game.context.restore(); // Restore the last saved state
		} else {
			this.game.drawImage(this)
		}
		
	}

	changeAnimation(name, speed) {
		this.speed = speed || this.speed
		this.animationName = name
	}

	move(speed, keyStatus) {
		this.flipX = (speed < 0)
		log(this.flipX)
		this.x += speed
		// 代码优化
		// if (keyStatus == 'down') {
		// 	this.speed = 1
		// 	this.changeAnimation('run')
		// } else {
		// 	this.speed = 3
		// 	this.changeAnimation('idle')
		// }
		let animationNames = {
			down: ['run', 1],
			up: ['idle', 3],
		}
		this.changeAnimation(...animationNames[keyStatus])
		//  优化end
	}	
}