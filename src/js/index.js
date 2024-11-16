// Pegar elementos <canvas>
const cnv = document.querySelector("#cnv")
const ctx = cnv.getContext("2d")

// Dimensões do canvas
cnv.width = Math.floor(window.innerWidth / 2)
cnv.height = Math.floor(window.innerHeight / 2)

// variáveis do game
const player = new Player(Math.floor(cnv.width / 2), Math.floor(cnv.height / 2))
const column1 = new Column(
  Math.floor(cnv.width / 4),
  Math.floor(cnv.height / 4)
)
const column2 = new Column(
  Math.floor(cnv.width / 4) * 3,
  Math.floor(cnv.height / 4)
)
const column3 = new Column(
  Math.floor(cnv.width / 4),
  Math.floor(cnv.height / 4) * 3
)
const column4 = new Column(
  Math.floor(cnv.width / 4) * 3,
  Math.floor(cnv.height / 4) * 3
)

const game = new BoxHead(cnv, ctx, player, [column1, column2, column3, column4])

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

// controle debbug
let consoles = 0

game.init()
