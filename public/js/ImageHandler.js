class ImageHandler {
  constructor () {
    this.imagesLengthObject = {
      yukipoyo: 37,
      michopa: 34,
      anmika: 3,
      kurochan: 1
    }    
    this.incorrectImagesObject = {}
    this.incorrectImagesArray = []
    this.correctImageObject = {}
    this.yukipoyoCommentImage = {}
    this.kurochanCommentImage = {}
    this.fukidashiImage = {}
    this.imagesLength = 4
  }

  loadIncorrectImagesObject () {
    let counter = 0
    for (let key in this.imagesLengthObject) {
      if (key === "yukipoyo") { continue }
      counter++
      for (let i = 1; i <= this.imagesLengthObject[key]; i++) {
        let gameObject = new GameObject(`./images/${key}/${i}.png`, key)
        this.incorrectImagesObject[counter] = gameObject
        counter++
      }
    }
  }

  generateIncorrectImagesArray () {
    // 表示する外れ画像の配列を作る
    let indexes = []
    let images = []
    let length = this.calculateImagesLength()
  
    while (indexes.length < 36) {
      const index = randomInt(length)
      if (!indexes.includes(index)) {
        if (!this.incorrectImagesObject[index]) { continue }
        this.incorrectImagesObject[index].updateSize()
        images.push(this.incorrectImagesObject[index])
        indexes.push(index)  
      }
    }
    this.incorrectImagesArray = images
  }

  calculateImagesLength () {
    let length = 0
    for (const key in this.imagesLengthObject) {
      length = length + this.imagesLengthObject[key]
    }
    return length
  }

  select (event) {
    if (state.currentNumber !== state.stageNumbers.imageBeingSelected) { return }

    state.update("imageSelected")
    timer.stopInterval()

    const rect = event.target.getBoundingClientRect()
    const mouseCoordinateX = event.clientX - Math.floor(rect.left)
    const mouseCoordinateY = event.clientY - Math.floor(rect.top)

    if (imageHandler.isCorrectImageSelected(mouseCoordinateX, mouseCoordinateY)) {
      game.continue()
    } else {
      game.gameOver("incorrectImageClicked", mouseCoordinateX, mouseCoordinateY)
    }
  }

  selectCorrectImage () {
    const index = randomInt(this.imagesLengthObject.yukipoyo) + 1
    this.correctImageObject = new GameObject(`./images/yukipoyo/${index}.png`, "yukipoyo")
    this.correctImageObject.updateSize()
    this.correctImageObject.image.onload = () => {
      game.getReady()
    }
  }

  isCorrectImageSelected (mouseCoordinateX, mouseCoordinateY) {
    // ゆきぽよの画像が選ばれているか
    return (mouseCoordinateX > this.correctImageObject.position.x &&
            mouseCoordinateX < this.correctImageObject.position.x + size.width &&
            mouseCoordinateY > this.correctImageObject.position.y &&
            mouseCoordinateY < this.correctImageObject.position.y + size.height)
  }

  findSelectedImage (mouseCoordinateX, mouseCoordinateY) {
    for (let image of this.incorrectImagesArray) {
      if (
        mouseCoordinateX > image.position.x &&
        mouseCoordinateX < image.position.x + size.width &&
        mouseCoordinateY > image.position.y &&
        mouseCoordinateY < image.position.y + size.height
      ) {
        return image
      }
    }
  }

  loadGameOverMenuImages () {
    this.yukipoyoCommentImage = new GameObject("./images/yukipoyo-removebg.png", "yukipoyo")
    this.kurochanCommentImage = new GameObject("./images/kurochan.png", "kurochan")
    this.fukidashiImage = new GameObject("./images/fukidashi2.png", "fukidashi")
  }
}

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

