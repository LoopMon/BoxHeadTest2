class Column {
  constructor(x, y, width = 40, height = 70, color = "gray") {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
  }
  draw = (ctx) => {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
