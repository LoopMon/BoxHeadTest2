class BoxHead {
  constructor(
    canvasElement,
    canvasContext,
    player,
    columns,
    spawners,
    gameStatus = {},
    directions = {}
  ) {
    // Tela
    this.cnv = canvasElement
    this.ctx = canvasContext
    // Entidades
    this.player = player
    this.columns = columns
    this.spawners = spawners
    // Controles do Game
    this.gameStatus = gameStatus
    this.directions = directions
    this.round = 1
    this.zombiesPerRound = 6
    this.canSpawn = true
  }

  draw = () => {
    // FUNÇÃO PARA DESENHAR AS ENTIDADES DO GAME
    this.ctx.clearRect(0, 0, this.cnv.width, this.cnv.height)
    this.columns.forEach((column) => {
      column.draw(this.ctx)
    })
    this.spawners.forEach((spawn) => {
      spawn.drawZombies(this.ctx)
    })
    this.player.draw(this.ctx)
  }

  update = () => {
    // FUNÇÃO PARA ATUALIAR O ESTADO DAS ENTIDADES
    this.player.move()
    this.spawnZombies()
    this.zombiesMove()
    this.collisions()
  }

  spawnZombies = () => {
    // FUNÇÃO PARA PREENCHER O ARRAY DE ZOMBIES
    if (this.canSpawn) {
      const amountZombies = Math.floor(
        this.zombiesPerRound / this.spawners.length
      )
      this.spawners.forEach((spawn) => {
        spawn.spawnZombie(amountZombies)
      })
      this.canSpawn = !this.canSpawn
    }
  }

  zombiesMove = () => {
    this.spawners.forEach((spawn) => {
      spawn.followPlayer(this.player)
    })
  }

  collisions = () => {
    // FUNÇÃO PARA CHAMAR A COLISÃO DAS ENTIDADES
    this.player.stayInto(this.cnv)
    this.columns.forEach((column) => {
      this.player.collision(column)
    })
  }

  game = () => {
    // FUNÇÃO PRINCIPAL
    this.update()
    this.draw()
    window.requestAnimationFrame(this.game)
  }

  init = () => {
    // FUNÇÃO DE PONTO DE INICIO
    console.log("Iniciando game...")
    // Posição dos Spawners igual as Colunas
    this.spawners.forEach((spawn, index) => {
      if (index % 2 == 0) {
        spawn.x = 0
        spawn.y = this.columns[index].y
      } else {
        spawn.x = this.cnv.width
        spawn.y = this.columns[index].y
      }
    })
    this.game()
  }
}
