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

function colisionWithCanvas(player) {
  if (player.x + player.width > cnv.width) {
    player.x = cnv.width - player.width
  }
  if (player.x < 0) {
    player.x = 0
  }
  if (player.y + player.height > cnv.height) {
    player.y = cnv.height - player.height
  }
  if (player.y < 0) {
    player.y = 0
  }
}

function colisionWithObj(player, obj) {
  if (
    player.x + player.width > obj.x &&
    player.x < obj.x + obj.width &&
    player.y + player.height > obj.y &&
    player.y < obj.y + obj.height
  ) {
    if (player.mvUp) {
      player.y += player.speed
    }
    if (player.mvDown) {
      player.y -= player.speed
    }
    if (player.mvLeft) {
      player.x += player.speed
    }
    if (player.mvRight) {
      player.x -= player.speed
    }
  }
}
