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

function drawImages() {
  // 表示をクリア
  context.clearRect(0, 0, 375, 375)
  // 文字を埋め込む時の大きさとフォント
  context.font = '50px sans-serif'
  const randomInteger = Math.floor(Math.random() * 9)
  let counter = 0

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const coordinateX = 125 * i
      const coordinateY = 125 * j
      if (randomInteger === counter) {
        // ゆきぽよの画像を表示する
        context.drawImage(yukipoyoDisplayImage, coordinateX, coordinateY, 125, 125)
        // 答えの座標をセットする
        answerCoordinateX = coordinateX
        answerCoordinateY = coordinateY
      } else {
        // みちょぱの画像を表示する
        context.drawImage(michopaDisplayImages[counter], coordinateX, coordinateY, 125, 125)
      }
      counter += 1
    }
  }
  setTimerInterval()
}

function gameOver () {
  isGameOver = true
  context.fillStyle = 'rgba(0,0,0,1)'
  context.fillRect(0, 0, 375, 375)
  context.font = '35px sans-serif'
  context.fillStyle = "yellow"
  context.fillText("ゲームオーバー💀🦴", 30, 188)
  drawFoundYukipoyoCount()
  timerElement.innerText = 0
  showStartButton()
}

function setTimerInterval () {
  timerElement.innerText = 4
  currentTimerId = setInterval(() => { startTimer() }, 1000)
}

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
