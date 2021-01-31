class ImageHandler {
  constructor () {
    this.imagesLengthObject = {
      yukipoyo: 37,
      michopa: 34,
      anmika: 3,
      kurochan: 1
    }    
    this.wrongImagesObject = {}
    this.wrongImagesArray = []
    this.correctImageObject = {}
    this.yukipoyoCommentImage = {}
    this.kurochanCommentImage = {}
    this.fukidashiImage = {}
    this.imagesLength = 4
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
  
    while (indexes.length < 36) {
      const index = randomInt(length)
      if (!indexes.includes(index)) {
        if (!this.wrongImagesObject[index]) { continue }
        this.wrongImagesObject[index].updateSize()
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
      game.gameOver("wrongImageClicked", mouseCoordinateX, mouseCoordinateY)
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
    for (let image of this.wrongImagesArray) {
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

