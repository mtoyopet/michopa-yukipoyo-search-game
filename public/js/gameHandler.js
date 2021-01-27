function startGame(callback) {
  isGameOver = false
  hideStartButton()

  // みちょぱの画像を8枚選ぶ
  michopaDisplayImages = new imageObjectsArray("michopa", michopaImagesLength).generateArray()

  // ゆきぽよの画像を１枚選ぶ
  const index = randomInt(yukipoyoImagesLength)
  yukipoyoDisplayImage.src = `./images/yukipoyo/${index}.png`
  yukipoyoDisplayImage.onload = () => callback()
}

function gameOver (type) {
  isGameOver = true

  if (type === "michopaClicked") {
    drawMichopaSelected()
  } else if (type === "timeOver") {
    drawGameOver()
  }

  drawFoundYukipoyoCount()
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
