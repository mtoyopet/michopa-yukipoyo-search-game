function startGame(callback) {
  isImageSelected = false
  isGameOver = false

  // 外れの画像の配列を作る
  hazureImagesArray = generateHazureImagesArray()

  // ゆきぽよの画像を１枚選ぶ  
  selectYukipoyoImage(callback)
}

function selectYukipoyoImage (callback) {
  const index = randomInt(imagesLengthObject.yukipoyo) + 1
  yukipoyoDisplayImageObject = new Image()
  yukipoyoDisplayImageObject.src = `./images/yukipoyo/${index}.png`
  yukipoyoDisplayImageObject.onload = () => {
    callback()
  }
}

function gameOver (type, mouseCoordinateX, mouseCoordinateY) {
  isGameOver = true
  const selectedImageObject = findSelectedImage(mouseCoordinateX, mouseCoordinateY)
  if (type === "hazureImageClicked") {
    drawHazureImageSelectedMenu(selectedImageObject)
  } else if (type === "timeOver") {
    drawTimeOverMenu()
  }

  drawFoundYukipoyoCountText()
  showStartButton()
  timerElement.innerText = 0
}

function setTimerInterval () {
  timerElement.innerText = 4
  currentTimerId = setInterval(() => { startTimer() }, 1000)
}

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function findSelectedImage (mouseCoordinateX, mouseCoordinateY) {
  for (let image of hazureImagesArray) {
    if (
      mouseCoordinateX > image.coordinateX &&
      mouseCoordinateX < image.coordinateX + 125 &&
      mouseCoordinateY > image.coordinateY &&
      mouseCoordinateY < image.coordinateY + 125
    ) {
      return image
    }
  }
}
