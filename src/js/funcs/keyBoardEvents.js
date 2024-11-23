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

document.addEventListener("keydown", (e) => {
  getActionOn(game.player, e.key)
  if (e.key === "n") {
    game.init()
  }
})
document.addEventListener("keyup", (e) => {
  getActionOff(game.player, e.key)
})
