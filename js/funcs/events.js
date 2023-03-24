document.addEventListener("keydown", (e) => {
    getActionOn(player, e.key)
})
document.addEventListener("keyup", (e) => {
    getActionOff(player, e.key)
})
