function getReady() {
  if (![1, 2].includes(state.currentNumber)) { return }
  // 外れの画像の配列を作る
  hazureImagesArray = generateHazureImagesArray()
  // ゆきぽよの画像を１枚選ぶ
  selectYukipoyoImage()
}

function selectYukipoyoImage () {
  const index = randomInt(imagesLengthObject.yukipoyo) + 1
  yukipoyoDisplayImageObject = new GameObject(`./images/yukipoyo/${index}.png`, "yukipoyo")
  yukipoyoDisplayImageObject.image.onload = () => {
    startGame()
  }
}

function startGame () {
  canvas.drawImages()
  hideStartButton()
  timer.setTimerInterval()
  state.update("imageBeingSelected")
}

function selectImage(event) {
  if (state.currentNumber !== state.stageNumbers.imageBeingSelected) { return }

  state.update("imageSelected")
  timer.stopInterval()

  const rect = event.target.getBoundingClientRect()
  const mouseCoordinateX = event.clientX - Math.floor(rect.left)
  const mouseCoordinateY = event.clientY - Math.floor(rect.top)

  if (isYukipoyoSelected(mouseCoordinateX, mouseCoordinateY)) {
    gameContinue()
  } else {
    gameOver("wrongImageClicked", mouseCoordinateX, mouseCoordinateY)
  }
}

function gameContinue () {
  state.update("beforeRestart")
  canvas.drawYukipoyoSelectedMenu()
  hazureImagesArray = generateHazureImagesArray()
  foundYukipoyoCount++
  setTimeout(() => {
    getReady()
  }, 500)
}

function gameOver (type, mouseCoordinateX, mouseCoordinateY) {
  const selectedImageObject = findSelectedImage(mouseCoordinateX, mouseCoordinateY)
  if (type === "wrongImageClicked") {
    state.update("wrongImageSelected")
    canvas.drawHazureSelectedMenu(selectedImageObject)
  } else if (type === "timeOver") {
    state.update("timeOver")
    canvas.drawTimeOverMenu()
  }

  canvas.drawFoundYukipoyoCountText()
  showStartButton()
  state.update("beforeStart")
}

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function findSelectedImage (mouseCoordinateX, mouseCoordinateY) {
  for (let image of hazureImagesArray) {
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

function loadGameOverMenuImages () {
  yukipoyoCommentImage = new GameObject("./images/yukipoyo-removebg.png", "yukipoyo")
  kurochanCommentImage = new GameObject("./images/kurochan.png", "kurochan")
  fukidashiImage = new GameObject("./images/fukidashi2.png", "fukidashi")
}
