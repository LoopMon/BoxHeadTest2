class Zombie {
  constructor(x, y, width = 10, height = 15, color = "green") {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.speed = 0.5
    this.life = 1
    this.canMove = true
    this.currentDirection = 0
    this.directions = {
      up: 0,
      upRight: 1,
      right: 2,
      downRight: 3,
      down: 4,
      downLeft: 5,
      left: 6,
      upLeft: 7,
    }
  }

  draw = (ctx) => {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  collision = (obj) => {
    if (
      this.x + this.width > obj.x &&
      this.x < obj.x + obj.width &&
      this.y + this.height > obj.y &&
      this.y < obj.y + obj.height
    ) {
      if (this.currentDirection == this.directions.right) {
        this.x = obj.x - obj.width
      }
      if (this.currentDirection == this.directions.left) {
        this.x = obj.x + obj.width
      }
      if (this.currentDirection == this.directions.down) {
        this.y = obj.y - obj.height
      }
      if (this.currentDirection == this.directions.up) {
        this.y = obj.y + obj.height
      }
    }
  }

  follow = (player) => {
    if (this.x + this.width < player.x) {
      this.move("right")
      this.currentDirection = this.directions.right
    }
    if (this.x > player.x + player.width) {
      this.move("left")
      this.currentDirection = this.directions.left
    }
    if (this.y + this.height < player.y) {
      this.move("down")
      this.currentDirection = this.directions.down
    }
    if (this.y > player.y + player.height) {
      this.move("up")
      this.currentDirection = this.directions.up
    }
  }

  move = (direction) => {
    if (direction == "right") {
      this.x += this.speed
    }
    if (direction == "left") {
      this.x -= this.speed
    }
    if (direction == "down") {
      this.y += this.speed
    }
    if (direction == "up") {
      this.y -= this.speed
    }
  }
}
