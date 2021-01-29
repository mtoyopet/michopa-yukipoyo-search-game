class ImageHandler {
  constructor () {
    this.imagesLengthObject = {
      yukipoyo: 31,
      michopa: 25,
      anmika: 3,
      kurochan: 1
    }    
    this.wrongImagesObject = {}
    this.wrongImagesArray = []
  }

  loadWrongImagesObject () {
    let counter = 0
    for (let key in this.imagesLengthObject) {
      if (key === "yukipoyo") { continue }
      counter++
      for (let i = 1; i <= this.imagesLengthObject[key]; i++) {
        let gameObject = new GameObject(`./images/${key}/${i}.png`, key)
        this.wrongImagesObject[counter] = gameObject
        counter++
      }
    }
  }

  generateWrongImagesArray () {
    // 表示する外れ画像の配列を作る
    let indexes = []
    let images = []
    let length = this.calculateImagesLength()
  
    while (indexes.length < 9) {
      const index = randomInt(length)
      if (!indexes.includes(index)) {
        if (!this.wrongImagesObject[index]) { continue }
        images.push(this.wrongImagesObject[index])
        indexes.push(index)  
      }
    }
    this.wrongImagesArray = images
  }

  calculateImagesLength () {
    let length = 0
    for (const key in this.imagesLengthObject) {
      length = length + this.imagesLengthObject[key]
    }
    return length
  }
}



