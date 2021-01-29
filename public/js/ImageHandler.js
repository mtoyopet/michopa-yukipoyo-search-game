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
    this.yukipoyoImageObject = {}
    this.yukipoyoCommentImage = {}
    this.kurochanCommentImage = {}
    this.fukidashiImage = {}
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

  selectYukipoyoImage (callback) {
    const index = randomInt(this.imagesLengthObject.yukipoyo) + 1
    this.yukipoyoImageObject = new GameObject(`./images/yukipoyo/${index}.png`, "yukipoyo")
    this.yukipoyoImageObject.image.onload = () => {
      callback()
    }
  }

  isYukipoyoSelected (mouseCoordinateX, mouseCoordinateY) {
    // ゆきぽよの画像が選ばれているか
    return (mouseCoordinateX > this.yukipoyoImageObject.position.x &&
            mouseCoordinateX < this.yukipoyoImageObject.position.x + 125 &&
            mouseCoordinateY > this.yukipoyoImageObject.position.y &&
            mouseCoordinateY < this.yukipoyoImageObject.position.y + 125)
  }

  findSelectedImage (mouseCoordinateX, mouseCoordinateY) {
    for (let image of this.wrongImagesArray) {
      if (
        mouseCoordinateX > image.position.x &&
        mouseCoordinateX < image.position.x + 125 &&
        mouseCoordinateY > image.position.y &&
        mouseCoordinateY < image.position.y + 125
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



