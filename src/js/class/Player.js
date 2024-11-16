class Player {
  constructor(
    x,
    y,
    width = 30,
    height = 60,
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

    // movimentos
    this.btnUp = up
    this.btnDown = down
    this.btnLeft = left
    this.btnRight = right
    this.mv = this.mvUp = this.mvDown = this.mvLeft = this.mvRight = false
    this.speed = 2
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
}
