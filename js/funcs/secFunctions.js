function getActionOn(player, action) {
    if (action == player.btnUp) {
        player.mvUp = true
        player.mv = true
    }
    if (action == player.btnDown) {
        player.mvDown = true
        player.mv = true
    }
    if (action == player.btnLeft) {
        player.mvLeft = true
        player.mv = true
    }
    if (action == player.btnRight) {
        player.mvRight = true
        player.mv = true
    }
}

function getActionOff(player, action) {
    if (action == player.btnUp) {
        player.mvUp = false
        player.mv = false
    }
    if (action == player.btnDown) {
        player.mvDown = false
        player.mv = false
    }
    if (action == player.btnLeft) {
        player.mvLeft = false
        player.mv = false
    }
    if (action == player.btnRight) {
        player.mvRight = false
        player.mv = false
    }
}

function drawObj(player, type=0) {
    if (type === 0) {
        ctx.fillStyle = player.c
        ctx.fillRect(player.x, player.y, player.w, player.h)
    }
    if (type === 1) {
        ctx.strokeStyle = player.c
        ctx.lineWidth = 3
        ctx.strokeRect(player.x, player.y, player.w, player.h)
    }
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

function colisionWithCanvas(player) {
    if (player.x + player.w > cnv.width) {
        player.x = cnv.width - player.w
    }
    if (player.x < 0) {
        player.x = 0
    }
    if (player.y + player.h > cnv.height) {
        player.y = cnv.height - player.h
    }
    if (player.y < 0) {
        player.y = 0
    }
}

function colisionWithObj(player, obj) {
    if (
        (player.x + player.w > obj.x) && (player.x < obj.x + obj.w) && 
        (player.y + player.h > obj.y) && (player.y < obj.y + obj.h)
    ) {
        if(player.mvUp){
            player.y += player.speed 
        }
        if(player.mvDown){
            player.y -= player.speed
        }
        if(player.mvLeft){
            player.x += player.speed
        }
        if(player.mvRight){
            player.x -= player.speed
        }
    }
}


