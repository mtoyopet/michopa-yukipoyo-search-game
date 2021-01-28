class State {
  constructor () {
    this.stageNumbers = {
      beforeStart: 1,
      beforeRestart: 2,
      imageBeingSelected: 3,
      imageSelected: 4,
      timeOver: 5,
      wrongImageSelected: 6
    }
    this.currentNumber = this.stageNumbers.beforeStart
  }

  update (key) {
    this.currentNumber = this.stageNumbers[key]
  }
}
