class Player {
    constructor (
        x = 0,
        y = 0,
        width = 30,
        height = 60,
        color = "gray",
        up = "w",
        down = "s",
        left = "a",
        right = "d"
    ) {
        // dimensões e cor
        this.x = x
        this.y = y
        this.w = width
        this.h = height
        this.c = color

        // movimentos
        this.btnUp = up
        this.btnDown = down
        this.btnLeft = left
        this.btnRight = right
        this.mv = this.mvUp = this.mvDown = this.mvLeft = this.mvRight = false
        this.speed = 2
        this.currentDirection = 0
    }
}