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

  spawnZombie = (num, direction) => {
    // FUNÇÃO PARA ADD N ZOMBIES NO ARRAY
    let distanceX = 0
    let distanceY = 0

    for (let i = 0; i < num; i++) {
      const zombie = new this.Zombie(this.x + distanceX, this.y + distanceY)
      this.zombies.push(zombie)
      distanceX += 20
    }
  }

  followPlayer = (player) => {
    this.zombies.forEach((zombie) => {
      zombie.follow(player)
    })
  }

  collisionWithPlayer = (player) => {
    this.zombies.forEach((zombie) => {
      zombie.collision(player)
    })
  }

  collisionWithOthers = () => {
    this.zombies.forEach((zombie1, index1) => {
      this.zombies.forEach((zombie2, index2) => {
        if (!(index1 == index2)) {
          zombie1.collision(zombie2)
          zombie2.collision(zombie1)
        }
      })
    })
  }

  collisionWithOthersSpawners = (spawner) => {
    this.zombies.forEach((zombie1) => {
      spawner.zombies.forEach((zombie2) => {
        zombie1.collision(zombie2)
        zombie2.collision(zombie1)
      })
    })
  }
}
