class Point {
  constructor () {
    this.counter = 0
    this.numbers = {
      zero: 0,
      five: 5,
      ten: 10,
      fifteen: 15,
      twenty: 20,
      twentyfive: 25,
      thirty: 30
    }
  }

  reset () {
    this.counter = 0
  }

  increment () {
    this.counter = this.counter + 1
  }

  isMidpoint () {
    let valuesArray = Object.values(this.numbers)
    return valuesArray.includes(this.counter)
  }
}