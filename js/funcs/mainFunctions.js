function draw() {
    drawObj(player)
}

function update() {
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    moveObj(player)
}

function game() {
    update()
    draw()
    window.requestAnimationFrame(game)
}

function main() {
    console.log("Iniciando game...")
    game()
}
