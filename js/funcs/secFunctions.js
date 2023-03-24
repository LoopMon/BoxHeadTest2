function drawObj(player) {
    ctx.fillStyle = player.c
    ctx.fillRect(player.x, player.y, player.w, player.h)
}

function moveObj(player) {
    if (player.mvUp) {
        player.y -= player.speed
    }
    if (player.mvDown) {
        player.y += player.speed
    }
    if (player.mvLeft) {
        player.x -= player.speed
    }
    if (player.mvRight) {
        player.x += player.speed
    }
}

function getActionOn(player, action) {
    if (action == player.btnUp) {
        player.mvUp = true
    }
    if (action == player.btnDown) {
        player.mvDown = true
    }
    if (action == player.btnLeft) {
        player.mvLeft = true
    }
    if (action == player.btnRight) {
        player.mvRight = true
    }
}

function getActionOff(player, action) {
    if (action == player.btnUp) {
        player.mvUp = false
    }
    if (action == player.btnDown) {
        player.mvDown = false
    }
    if (action == player.btnLeft) {
        player.mvLeft = false
    }
    if (action == player.btnRight) {
        player.mvRight = false
    }
}
