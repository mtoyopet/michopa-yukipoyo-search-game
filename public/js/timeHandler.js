class TimeHandler {
  constructor () {
    this.leftTime = 4
    this.timerElement = document.getElementById("timer-text")
    this.currentTimerId
  }

  update () {
    if (this.leftTime <= 1) {
      gameOver("timeOver")
      this.stopInterval()
    } else {
      this.set(this.leftTime - 1)
    }
  }

  startInterval () {
    this.set(4)
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