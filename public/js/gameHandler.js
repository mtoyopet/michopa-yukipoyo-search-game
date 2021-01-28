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
  yukipoyoDisplayImageObject = new GameObject(`./images/yukipoyo/${index}.png`, "yukipoyo")
  yukipoyoDisplayImageObject.image.onload = () => {
    callback()
  }
}

function gameOver (type, mouseCoordinateX, mouseCoordinateY) {
  isGameOver = true
  const selectedImageObject = findSelectedImage(mouseCoordinateX, mouseCoordinateY)
  if (type === "hazureImageClicked") {
    canvas.drawHazureSelectedMenu(selectedImageObject)
  } else if (type === "timeOver") {
    canvas.drawTimeOverMenu()
  }

  canvas.drawFoundYukipoyoCountText()
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
