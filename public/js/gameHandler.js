function getReady() {
  if (![1, 2].includes(state.currentNumber)) { return }
  // 外れの画像の配列を作る
  imageHandler.generateWrongImagesArray()
  // ゆきぽよの画像を１枚選ぶ
  imageHandler.selectYukipoyoImage(startGame)
}

function startGame () {
  canvas.drawImages()
  dom.hideStartButton()
  timer.startInterval()
  state.update("imageBeingSelected")
}

function selectImage(event) {
  if (state.currentNumber !== state.stageNumbers.imageBeingSelected) { return }

  state.update("imageSelected")
  timer.stopInterval()

  const rect = event.target.getBoundingClientRect()
  const mouseCoordinateX = event.clientX - Math.floor(rect.left)
  const mouseCoordinateY = event.clientY - Math.floor(rect.top)

  if (imageHandler.isYukipoyoSelected(mouseCoordinateX, mouseCoordinateY)) {
    gameContinue()
  } else {
    gameOver("wrongImageClicked", mouseCoordinateX, mouseCoordinateY)
  }
}

function gameContinue () {
  state.update("beforeRestart")
  canvas.drawYukipoyoSelectedMenu()
  imageHandler.generateWrongImagesArray()
  foundYukipoyoCount++
  setTimeout(() => {
    getReady()
  }, 500)
}

function gameOver (type, mouseCoordinateX, mouseCoordinateY) {
  const selectedImageObject = imageHandler.findSelectedImage(mouseCoordinateX, mouseCoordinateY)
  if (type === "wrongImageClicked") {
    state.update("wrongImageSelected")
    canvas.drawHazureSelectedMenu(selectedImageObject)
  } else if (type === "timeOver") {
    state.update("timeOver")
    canvas.drawTimeOverMenu()
  }

  canvas.drawFoundYukipoyoCountText()
  dom.showStartButton()
  state.update("beforeStart")
}

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function loadGameOverMenuImages () {
  yukipoyoCommentImage = new GameObject("./images/yukipoyo-removebg.png", "yukipoyo")
  kurochanCommentImage = new GameObject("./images/kurochan.png", "kurochan")
  fukidashiImage = new GameObject("./images/fukidashi2.png", "fukidashi")
}
