document.addEventListener("keydown", (e) => {
  getActionOn(game.player, e.key)
})
document.addEventListener("keyup", (e) => {
  getActionOff(game.player, e.key)
})
