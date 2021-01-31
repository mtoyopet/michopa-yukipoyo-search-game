class Size {
  constructor () {
    this.width = 187.5
    this.height = 187.5
  }

  update () {
    if (point.counter < point.numbers.ten) {
      this.width = 187.5
      this.height = 187.5 
    } else if (point.counter >= point.numbers.ten && point.counter < point.numbers.fifteen) {
      this.width = 125
      this.height = 125
    } else if (point.counter >= point.numbers.fifteen && point.counter < point.numbers.twenty) { 
      this.width = 93.75
      this.height = 93.75
    } else if (point.counter >= point.numbers.twenty && point.counter < point.numbers.twentyfive) {
      this.width = 75
      this.height = 75
    } else {
      this.width = 62.5
      this.height = 62.5
    }
  }
}