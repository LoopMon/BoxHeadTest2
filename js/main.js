// Pegar elementos <canvas>
const cnv = document.querySelector("#cnv")
const ctx = cnv.getContext("2d")

// Dimensões do canvas
cnv.width = window.innerWidth
cnv.height = window.innerHeight

// variáveis do game
const player = new Player(
    x = Math.floor(Math.random() * cnv.width / 2),
    y = Math.floor(Math.random() * cnv.height / 2),
    width = 30,
    height = 60,
    color = "blue",
    up = "w",
    down = "s",
    left = "a",
    right = "d"
)

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
