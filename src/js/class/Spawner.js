class Spawner {
  constructor(Zombie, x = 0, y = 0) {
    this.x = x
    this.y = y
    this.Zombie = Zombie
    this.zombies = []
  }

  drawZombies = (ctx) => {
    this.zombies.forEach((zombie) => {
      zombie.draw(ctx)
    })
  }

  spawnZombie = (num) => {
    // FUNÇÃO PARA ADD N ZOMBIES NO ARRAY
    for (let i = 0; i < num; i++) {
      const zombie = new this.Zombie(this.x, this.y)
      this.zombies.push(zombie)
    }
  }

  followPlayer = (player) => {
    this.zombies.forEach((zombie) => {
      zombie.follow(player)
    })
  }
}
