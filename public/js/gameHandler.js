function startGame(callback) {
  isGameOver = false
  hideStartButton()

  // 外れの画像の配列を作る
  hazureImagesArray = generateHazureImagesArray()

  // ゆきぽよの画像を１枚選ぶ  
  selectYukipoyoImage(callback)
}

function gameOver (type, mouseCoordinateX, mouseCoordinateY) {
  isGameOver = true
  const selectedImageObject = findSelectedImage(mouseCoordinateX, mouseCoordinateY)
  console.log({ src: selectedImageObject.src, text: selectedImageObject.personName })
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
