function draw() {
    drawObj(collumn1, 1)
    drawObj(collumn2, 1)
    drawObj(collumn3, 1)
    drawObj(collumn4, 1)
    drawObj(player)
}

function update() {
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    moveObj(player)
    colisionWithObj(player, collumn1)
    colisionWithObj(player, collumn2)
    colisionWithObj(player, collumn3)
    colisionWithObj(player, collumn4)
    colisionWithCanvas(player)
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
