// Pegar elementos <canvas>
const cnv = document.querySelector("#cnv")
const ctx = cnv.getContext("2d")

// Dimensões do canvas
cnv.width = Math.floor(window.innerWidth / 2)
cnv.height = Math.floor(window.innerHeight / 3)
// tamanho das entidades
width = 10
height = 15
// variáveis do game
const player = new Player(
  Math.floor(cnv.width / 2),
  Math.floor(cnv.height / 2),
  width,
  height
)
const columns = [
  new Column(Math.floor(cnv.width / 4), Math.floor(cnv.height / 4)),
  new Column(Math.floor(cnv.width / 4) * 3, Math.floor(cnv.height / 4)),
  new Column(Math.floor(cnv.width / 4), Math.floor(cnv.height / 4) * 3),
  new Column(Math.floor(cnv.width / 4) * 3, Math.floor(cnv.height / 4) * 3),
]
columns.forEach((column) => {
  column.centered()
})
const spawners = [new Spawner(Zombie), new Spawner(Zombie)]

const gameStatus = {
  pause: 0,
  playing: 1,
  menu: 2,
  gameover: 3,
}
const directions = {
  up: 0,
  upRight: 1,
  right: 2,
  downRight: 3,
  down: 4,
  downLeft: 5,
  left: 6,
  upLeft: 7,
}

const game = new BoxHead(
  cnv,
  ctx,
  player,
  columns,
  spawners,
  gameStatus,
  directions
)

game.init()
