function startGame(callback) {
  isGameOver = false
  hideStartButton()

  // 外れの画像の配列を作る
  hazureImagesArray = generateHazureImagesArray()

  // ゆきぽよの画像を１枚選ぶ  
  yukipoyoDisplayImage = selectYukipoyoImage()
  callback()
}

function gameOver (type) {
  isGameOver = true

  if (type === "hazureImageClicked") {
    drawHazureImageSelectedMenu()
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
