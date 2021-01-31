class Timer {
  constructor () {
    this.originalTime = 7
    this.leftTime = this.originalTime
    this.timerElement = document.getElementById("timer-text")
    this.currentTimerId
  }

  update () {
    if (this.leftTime <= 1) {
      game.gameOver("timeOver")
      this.stopInterval()
    } else {
      this.set(this.leftTime - 1)
    }
  }

  startInterval () {
    this.set(this.originalTime)
    this.currentTimerId = setInterval(() => { this.update() }, 1000)
  }

  stopInterval () {
    clearInterval(this.currentTimerId)
  }

  set (number) {
    this.leftTime = number
    this.timerElement.innerText = this.leftTime
  }
}