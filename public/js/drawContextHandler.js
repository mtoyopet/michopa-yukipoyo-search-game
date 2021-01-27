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

function drawMenu() {
  context.fillStyle = 'pink'
  context.fillRect(0, 0, 375, 375)
  context.font = '30px sans-serif'
  context.fillStyle = "grey"
  context.fillText("ゆきぽよを探そう!", 60, 188)
}

function drawFoundYukipoyoCount() {
  context.font = '15px sans-serif'
  context.fillStyle = "white"
  context.fillText(`${foundYukipoyoCount}ゆきぽよはっけ〜ん`, 110, 220)
  foundYukipoyoCount = 0
}

function drawMichopaSelected () {
  context.fillStyle = 'rgba(0,0,0,0.8)'
  context.fillRect(0, 0, 375, 375)
  context.font = '35px sans-serif'
  context.fillStyle = "yellow"
  context.fillText("それ、みちょぱ😭😭", 30, 188)
  drawYukipoyoComment()
}

function drawGameOver () {
  context.fillStyle = 'rgba(0,0,0,1)'
  context.fillRect(0, 0, 375, 375)
  context.font = '35px sans-serif'
  context.fillStyle = "yellow"
  context.fillText("ゲームオーバー💀🦴", 30, 188)
  drawYukipoyoComment()
}

function drawYukipoyoFound () {
  context.fillStyle = 'rgba(255,255,255,0.8)'
  context.fillRect(0, 0, 375, 375)
  context.font = '40px sans-serif'
  context.fillStyle = "red"
  context.fillText("ゆきぽよ発見🎉!!!", 25, 188)
}

function drawYukipoyoComment () {
  context.drawImage(yukipoyoCommentImage, 30, 250, 125, 125)
  context.drawImage(fukidashiImage, 120, 240, 250, 120)
  context.font = '18px sans-serif'
  context.fillStyle = "black"
  comment = yukipoyoComment()
  context.fillText(comment, 163, 305)
}

function loadYukipoyoCommentImage () {
  yukipoyoCommentImage = new Image()
  yukipoyoCommentImage.onload = () => {
    console.log("image loaded")
  }
  yukipoyoCommentImage.src = "./images/yukipoyo-removebg.png"

  fukidashiImage = new Image()
  fukidashiImage.onload = () => {
    console.log("image loaded")
  }
  fukidashiImage.src ="./images/fukidashi2.png"
}

function yukipoyoComment () {
  if (foundYukipoyoCount < 5) {
    return "もっと真剣に探して!!" 
  } else if (foundYukipoyoCount >= 5 || foundYukipoyoCount < 10) {
    return "・・・集中してた？"
  } else if (foundYukipoyoCount >= 10 || foundYukipoyoCount < 15) {
    return "やっとスタートラインね"
  } else if (foundYukipoyoCount >= 15 || foundYukipoyoCount < 20) {
    return "慣れてきた感じ？？"
  } else if (foundYukipoyoCount >= 20 || foundYukipoyoCount < 25) {
    return "私のファンでしょ？"
  } else if (foundYukipoyoCount >= 25 || foundYukipoyoCount < 30) {
    return "いいね、その調子!!"
  } else {
    return "ゆきぽよファン最高!"
  }
}