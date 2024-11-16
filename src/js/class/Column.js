class Column {
  constructor(x, y, width = 20, height = 30, color = "gray") {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
  }
  draw = (ctx, option = "rect") => {
    if (option == "stroke") {
      ctx.strokeStyle = this.color
      ctx.lineWidth = 2
      ctx.strokeRect(this.x, this.y, this.width, this.height)
    } else {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }
  centered = () => {
    this.x = Math.floor(this.x - this.width / 2)
    this.y = Math.floor(this.y - this.height / 2)
  }
}
