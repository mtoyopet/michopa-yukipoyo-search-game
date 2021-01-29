class DomHandler {
  constructor () {
    this.timerWrapElement = document.getElementById("timer-wrap")
    this.startButtonElement = document.getElementById("start-game-button")
  }

  hideStartButton () {
    this.startButtonElement.style.display = "none"
    this.timerWrapElement.style.display = "block"
  }

  showStartButton () {
    this.startButtonElement.style.display = "inline"
    this.timerWrapElement.style.display ="none"
  }
}