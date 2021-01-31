class GameHandler {
  getReady(difficultyLevel) {
    let stageNumbers = state.stageNumbers
    if (![stageNumbers.beforeStart, stageNumbers.beforeRestart].includes(state.currentNumber)) { return }
    size.update()
    canvas.updateRowColumns()
    dom.hideStartButton()
    // 外れの画像の配列を作る
    imageHandler.generateWrongImagesArray()
    // ゆきぽよの画像を１枚選ぶ
    imageHandler.selectCorrectImage()
    // モードによって何度を調整する
    timer.updateOriginalTime(difficultyLevel)
  }

  start () {
    canvas.drawImages()
    timer.startInterval()
    dom.showTimer()
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
