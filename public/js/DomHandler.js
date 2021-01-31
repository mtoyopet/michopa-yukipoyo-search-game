class DomHandler {
  constructor () {
    this.timerWrapElement = document.getElementById("timer-wrap")
    this.timerElement = document.getElementById("timer-text")
    this.startButtonElement = document.getElementById("start-game-wrap")
  }

  hideStartButton () {
    this.timerElement.innerText = timer.originalTime
    this.startButtonElement.style.display = "none"
  }

  showTimer () {
    this.timerWrapElement.style.display = "block"
  }

  hideTimer () {
    this.timerWrapElement.style.display = "none"
  }

  showStartButton () {
    this.startButtonElement.style.display = "block"
    this.timerWrapElement.style.display ="none"
  }
  
}