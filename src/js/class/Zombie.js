class Zombie {
  constructor(x, y, width = 10, height = 15, color = "green") {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.speed = 0.4
    this.life = 1
  }

  draw = (ctx) => {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  follow = (player) => {
    if (this.x + this.width < player.x) {
      this.move("right")
    }
    if (this.x > player.x + player.width) {
      this.move("left")
    }
    if (this.y + this.height < player.y) {
      this.move("down")
    }
    if (this.y > player.y + player.height) {
      this.move("up")
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
