class GameHandler {
  prepare(difficultyLevel) {
    let stageNumbers = state.stageNumbers
    if (![stageNumbers.beforeStart, stageNumbers.beforeRestart].includes(state.currentNumber)) { return }
    size.update()
    canvas.updateRowColumns()
    // 外れの画像の配列を作る
    imageHandler.generateIncorrectImagesArray()
    // ゆきぽよの画像を１枚選ぶ
    imageHandler.selectCorrectImage()
    // モードによって何度を調整する
    timer.updateOriginalTime(difficultyLevel)
  }

  getReady () {
    dom.hideStartButton()
    dom.hideTimer()

    if (!point.isMidpoint()) { this.start(); return }
    canvas.drawMidpointMenu()
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
    imageHandler.generateIncorrectImagesArray()
    point.increment()
    setTimeout(() => {
      this.prepare()
    }, 500)
  }

  gameOver (type, mouseCoordinateX, mouseCoordinateY) {
    const selectedImageObject = imageHandler.findSelectedImage(mouseCoordinateX, mouseCoordinateY)
    if (type === "incorrectImageClicked") {
      state.update("incorrectImageSelected")
      canvas.drawIncorrectImageSelectedMenu(selectedImageObject)
    } else if (type === "timeOver") {
      state.update("timeOver")
      canvas.drawTimeOverMenu()
    }
  
    canvas.drawPoint()
    dom.showStartButton()
    state.update("beforeStart")
  }
}
