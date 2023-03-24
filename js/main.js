// Pegar elementos <canvas>
const cnv = document.querySelector("#cnv")
const ctx = cnv.getContext("2d")

// Dimensões do canvas
cnv.width = window.innerWidth
cnv.height = window.innerHeight

// variáveis do game
const player = new Player(
    x = 0,
    y = 0,
    width = 30,
    height = 60,
    color = "gray",
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
