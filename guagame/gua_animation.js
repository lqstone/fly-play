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
		this.texture = this.animations.idle[0]
        this.w = this.texture.width / 2
        this.h = this.texture.height / 2
        log(1111, this.texture.width)
        log(1111, this.texture.height)
		this.framesIndex = 0
		this.speed = 3
		this.framesCount = this.speed
	}
	update() {
		this.framesCount--
		//  设置动画的定格图片
		if (this.framesCount === 0) {
			this.framesCount = this.speed
			this.framesIndex = (this.framesIndex + 1) % this.animations[this.animationName].length
			this.texture = this.animations[this.animationName][this.framesIndex]
	        this.w = this.texture.width / 2
	        this.h = this.texture.height / 2
		}
	}
	draw() {
		this.game.drawImage(this)
	}
	move(speed, keyStatus) {
		this.x += speed
		if (keyStatus == 'down') {
			this.speed = 1
			this.animationName = 'run'
		} else {
			this.speed = 3
			this.animationName = 'idle'
		}
		log('keyStatus', keyStatus)
	}	
}