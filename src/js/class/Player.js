class Player {
  constructor(
    x,
    y,
    width = 10,
    height = 15,
    color = "blue",
    up = "w",
    down = "s",
    left = "a",
    right = "d"
  ) {
    // dimensões e cor
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color

    // atributos
    this.btnUp = up
    this.btnDown = down
    this.btnLeft = left
    this.btnRight = right
    this.mv = this.mvUp = this.mvDown = this.mvLeft = this.mvRight = false
    this.speed = 1
    this.life = 10
    this.currentDirection = 0
  }

  draw = (ctx) => {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  move = () => {
    if (player.mvUp) {
      player.y -= player.speed
    }
    if (player.mvDown) {
      player.y += player.speed
    }
    if (player.mvLeft) {
      player.x -= player.speed
    }
    if (player.mvRight) {
      player.x += player.speed
    }
  }

  collision = (obj) => {
    if (
      this.x + this.width > obj.x &&
      this.x < obj.x + obj.width &&
      this.y + this.height > obj.y &&
      this.y < obj.y + obj.height
    ) {
      if (this.mvUp) {
        this.y += this.speed
      }
      if (this.mvDown) {
        this.y -= this.speed
      }
      if (this.mvLeft) {
        this.x += this.speed
      }
      if (this.mvRight) {
        this.x -= this.speed
      }
    }
  }

  stayInto = (obj) => {
    if (this.x + this.width > obj.width) {
      this.x = obj.width - this.width
    }
    if (this.x < 0) {
      this.x = 0
    }
    if (this.y + this.height > obj.height) {
      this.y = obj.height - this.height
    }
    if (this.y < 0) {
      this.y = 0
    }
  }
}
