class BoxHead {
  constructor(canvasElement, canvasContext, player, columns) {
    this.cnv = canvasElement
    this.ctx = canvasContext
    this.player = player
    this.columns = columns
  }

  draw = () => {
    this.columns.forEach((column) => {
      column.draw(this.ctx)
    })
    this.player.draw(this.ctx)
  }

  update = () => {
    this.ctx.clearRect(0, 0, this.cnv.width, this.cnv.height)
    this.player.move()
    this.collisions()
  }

  collisions = () => {
    this.player.stayInto(this.cnv)
    this.columns.forEach((column) => {
      this.player.collision(column)
    })
  }

  game = () => {
    this.update()
    this.draw()
    window.requestAnimationFrame(this.game)
  }

  init = () => {
    console.log("Iniciando game...")
    this.game()
  }
}
