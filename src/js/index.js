// Pegar elementos <canvas>
const cnv = document.querySelector("#cnv")
const ctx = cnv.getContext("2d")

// Dimensões do canvas
cnv.width = Math.floor(window.innerWidth / 2)
cnv.height = Math.floor(window.innerHeight / 3)

// variáveis do game
const player = new Player(Math.floor(cnv.width / 2), Math.floor(cnv.height / 2))
const columns = [
  new Column(Math.floor(cnv.width / 4), Math.floor(cnv.height / 4)),
  new Column(Math.floor(cnv.width / 4) * 3, Math.floor(cnv.height / 4)),
  new Column(Math.floor(cnv.width / 4), Math.floor(cnv.height / 4) * 3),
  new Column(Math.floor(cnv.width / 4) * 3, Math.floor(cnv.height / 4) * 3),
]
columns.forEach((column) => {
  column.centered()
})
const game = new BoxHead(cnv, ctx, player, columns)

const estados = {
  pause: 0,
  playing: 1,
  menu: 2,
  gameover: 3,
}
const directions = {
  up: 8,
  down: 2,
  left: 4,
  right: 6,
}

game.init()
