// Pegar elementos <canvas>
const cnv = document.querySelector("#cnv")
const ctx = cnv.getContext("2d")

// Dimensões do canvas
cnv.width = window.innerWidth
cnv.height = window.innerHeight

// variáveis do game
const player = new Player(
    x = Math.floor(cnv.width * 50 / 100),
    y = Math.floor(cnv.height * 50 / 100),
    width = 20,
    height = 40,
    color = "blue",
    up = "w",
    down = "s",
    left = "a",
    right = "d"
)
const collumn1 = new Collumn(pos=1)
const collumn2 = new Collumn(pos=2)
const collumn3 = new Collumn(pos=3)
const collumn4 = new Collumn(pos=4)

const gravity = 0.2
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

main()
