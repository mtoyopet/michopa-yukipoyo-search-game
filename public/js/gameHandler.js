class GameHandler {
  getReady() {
    let stageNumbers = state.stageNumbers
    if (![stageNumbers.beforeStart, stageNumbers.beforeRestart].includes(state.currentNumber)) { return }
    size.update()
    canvas.updateRowColumns()
    // 外れの画像の配列を作る
    imageHandler.generateWrongImagesArray()
    // ゆきぽよの画像を１枚選ぶ
    imageHandler.selectCorrectImage()
  }

  start () {
    canvas.drawImages()
    dom.hideStartButton()
    timer.startInterval()
    state.update("imageBeingSelected")
  }

  continue () {
    state.update("beforeRestart")
    canvas.drawYukipoyoSelectedMenu()
    imageHandler.generateWrongImagesArray()
    point.increment()
    setTimeout(() => {
      this.getReady()
    }, 500)
  }

  gameOver (type, mouseCoordinateX, mouseCoordinateY) {
    const selectedImageObject = imageHandler.findSelectedImage(mouseCoordinateX, mouseCoordinateY)
    if (type === "wrongImageClicked") {
      state.update("wrongImageSelected")
      canvas.drawHazureSelectedMenu(selectedImageObject)
    } else if (type === "timeOver") {
      state.update("timeOver")
      canvas.drawTimeOverMenu()
    }
  
    canvas.drawPoint()
    dom.showStartButton()
    state.update("beforeStart")
  }
}
