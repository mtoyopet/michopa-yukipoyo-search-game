function drawImages() {
  if (isGameOver) { return }

  // 表示をクリア
  context.clearRect(0, 0, 375, 375)
  const randomInteger = Math.floor(Math.random() * 9)
  let counter = 0

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const coordinateX = 125 * i
      const coordinateY = 125 * j
      if (randomInteger === counter) {
        // ゆきぽよの画像を表示する
        context.drawImage(yukipoyoDisplayImageObject, coordinateX, coordinateY, 125, 125)
        // 答えの座標をセットする
        yukipoyoDisplayImageObject.coordinateX = coordinateX  //　正解の画像の座標X
        yukipoyoDisplayImageObject.coordinateY = coordinateY //　正解の画像の座標Y
      } else {
        // 外れ画像を表示する
        hazureImagesArray[counter].coordinateX = coordinateX
        hazureImagesArray[counter].coordinateY = coordinateY
        context.drawImage(hazureImagesArray[counter], coordinateX, coordinateY, 125, 125)
      }
      counter += 1
    }
  }
  hideStartButton()
  setTimerInterval()
}

function drawStartMenu() {
  context.fillStyle = 'pink'
  context.fillRect(0, 0, 375, 375)
  context.font = '30px sans-serif'
  context.fillStyle = "grey"
  context.fillText("ゆきぽよを探そう!", 60, 188)
  context.font = '13px sans-serif'
  context.fillStyle = "black"
  context.fillText("9枚の写真のどれか1つだけゆきぽよが写っているよ", 38, 220)
  context.fillText("ゆきぽよを見つけてクリックしてね！", 73, 237)
}

function drawFoundYukipoyoCountText() {
  context.font = '15px sans-serif'
  context.fillStyle = "white"
  context.fillText(`${foundYukipoyoCount}ゆきぽよはっけ〜ん`, 110, 220)
  foundYukipoyoCount = 0
}

function drawHazureImageSelectedMenu (selectedImageObject) {
  context.fillStyle = 'rgba(0,0,0,0.8)'
  context.fillRect(0, 0, 375, 375)
  context.font = '30px sans-serif'
  context.fillStyle = "yellow"
  context.fillText(selectedImageObject.titleText, 35, 188)
  drawCommentText(selectedImageObject.personName)
}

function drawTimeOverMenu (personName) {
  context.fillStyle = 'rgba(0,0,0,1)'
  context.fillRect(0, 0, 375, 375)
  context.font = '35px sans-serif'
  context.fillStyle = "yellow"
  context.fillText("タイムオーバー💀🦴", 30, 188)
  drawCommentText(personName)
}

function drawYukipoyoFoundMenu () {
  context.fillStyle = 'rgba(255,255,255,0.8)'
  context.fillRect(0, 0, 375, 375)
  context.font = '40px sans-serif'
  context.fillStyle = "#EE4056"
  context.fillText("ゆきぽよ発見🎉!!!", 25, 188)
}

function drawCommentText (personName) {
  if (personName === "yukipoyo") {
    context.drawImage(yukipoyoCommentImage, 30, 250, 125, 125)
    context.drawImage(fukidashiImage, 120, 240, 250, 120)
    context.font = '14px sans-serif'
    context.fillStyle = "black"
    comment = yukipoyoComment()
    context.fillText(comment, 163, 305)
  } else if (personName === "kurochan") {
    context.drawImage(kurochanCommentImage, 30, 250, 125, 125)
    context.drawImage(fukidashiImage, 120, 240, 250, 120)
    context.font = '14px sans-serif'
    context.fillStyle = "black"
    context.fillText("君が大好きだしんよ♡♡♡", 163, 305)
  }
}

function loadCommentImages () {
  yukipoyoCommentImage = new Image()
  yukipoyoCommentImage.src = "./images/yukipoyo-removebg.png"

  kurochanCommentImage = new Image()
  kurochanCommentImage.src = "./images/kurochan.png"

  fukidashiImage = new Image()
  fukidashiImage.src ="./images/fukidashi2.png"
}


function yukipoyoComment () {
  if (foundYukipoyoCount === 0) {
    return "・・・・・やる気あるの？"
  } else if (foundYukipoyoCount >= 1 && foundYukipoyoCount < 5) {
    return "もっと真剣に探しなさい!!" 
  } else if (foundYukipoyoCount >= 5 && foundYukipoyoCount < 10) {
    return "・・ちゃんと集中してた？"
  } else if (foundYukipoyoCount >= 10 && foundYukipoyoCount < 15) {
    return "やっとスタートラインね!!"
  } else if (foundYukipoyoCount >= 15 && foundYukipoyoCount < 20) {
    return "やっと慣れてきた感じね？"
  } else if (foundYukipoyoCount >= 20 && foundYukipoyoCount < 25) {
    return "もしかして私のファン？？"
  } else if (foundYukipoyoCount >= 25 && foundYukipoyoCount < 30) {
    return "いいわね、その調子よ!!"
  } else if (foundYukipoyoCount >= 30 && foundYukipoyoCount < 35) {
    return "まだまだいけるんじゃない?"
  } else if (foundYukipoyoCount >= 35 && foundYukipoyoCount < 40) {
    return "あともう少し頑張れるわよ!"
  } else if (foundYukipoyoCount >= 40 && foundYukipoyoCount < 45) {
    return "最高ね・・褒めてあげるわ"
  } else {
    return "あなたこそ私の真のファン!"
  }
}