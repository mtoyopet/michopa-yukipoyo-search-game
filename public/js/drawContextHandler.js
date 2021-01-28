class canvasHandler {
  constructor () {
    this.canvas = document.getElementById("canvas") // canvas要素を取得
    this.gameScreenCtx = this.canvas.getContext("2d")
  }

  drawImages() {
    if (isGameOver) { return }
    // 表示をクリア
    this.gameScreenCtx.clearRect(0, 0, 375, 375)
    const randomInteger = Math.floor(Math.random() * 9)
    let counter = 0
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const coordinateX = 125 * i
        const coordinateY = 125 * j
        if (randomInteger === counter) {
          // ゆきぽよの画像を表示する
          yukipoyoDisplayImageObject.drawOnScreen(coordinateX, coordinateY)
        } else {
          // 外れ画像を表示する
          hazureImagesArray[counter].drawOnScreen(coordinateX, coordinateY)
        }
        counter += 1
      }
    }
  }

  drawStartMenu () {
    this.gameScreenCtx.fillStyle = 'pink'
    this.gameScreenCtx.fillRect(0, 0, 375, 375)
    this.gameScreenCtx.font = '30px sans-serif'
    this.gameScreenCtx.fillStyle = "grey"
    this.gameScreenCtx.fillText("ゆきぽよを探そう!", 60, 188)
    this.gameScreenCtx.font = '13px sans-serif'
    this.gameScreenCtx.fillStyle = "black"
    this.gameScreenCtx.fillText("9枚の写真のどれか1つだけゆきぽよが写っているよ", 38, 220)
    this.gameScreenCtx.fillText("ゆきぽよを見つけてクリックしてね！", 73, 237)
  }

  drawTimeOverMenu (personName) {
    this.gameScreenCtx.fillStyle = 'rgba(0,0,0,1)'
    this.gameScreenCtx.fillRect(0, 0, 375, 375)
    this.gameScreenCtx.font = '35px sans-serif'
    this.gameScreenCtx.fillStyle = "yellow"
    this.gameScreenCtx.fillText("タイムオーバー💀🦴", 30, 188)
    this.drawCommentText(personName)
  }

  drawYukipoyoSelectedMenu () {
    this.gameScreenCtx.fillStyle = 'rgba(255,255,255,0.8)'
    this.gameScreenCtx.fillRect(0, 0, 375, 375)
    this.gameScreenCtx.font = '40px sans-serif'
    this.gameScreenCtx.fillStyle = "#EE4056"
    this.gameScreenCtx.fillText("ゆきぽよ発見🎉!!!", 25, 188)
  }

  drawHazureSelectedMenu (selectedImageObject) {
    this.gameScreenCtx.fillStyle = 'rgba(0,0,0,0.8)'
    this.gameScreenCtx.fillRect(0, 0, 375, 375)
    this.gameScreenCtx.font = '30px sans-serif'
    this.gameScreenCtx.fillStyle = "yellow"
    this.gameScreenCtx.fillText(selectedImageObject.image.titleText, 35, 188)
    this.drawCommentText(selectedImageObject.image.personName)
  }

  drawCommentText (personName) {
    if (personName === "kurochan") {
      this.gameScreenCtx.drawImage(kurochanCommentImage.image, 30, 250, 125, 125)
      this.gameScreenCtx.drawImage(fukidashiImage.image, 120, 240, 250, 120)
      this.gameScreenCtx.font = '14px sans-serif'
      this.gameScreenCtx.fillStyle = "black"
      this.gameScreenCtx.fillText("君が大好きだしんよ♡♡♡", 163, 305)
    } else {
      this.gameScreenCtx.drawImage(yukipoyoCommentImage.image, 30, 250, 125, 125)
      this.gameScreenCtx.drawImage(fukidashiImage.image, 120, 240, 250, 120)
      this.gameScreenCtx.font = '14px sans-serif'
      this.gameScreenCtx.fillStyle = "black"
      this.gameScreenCtx.fillText(this.yukipoyoComment(), 163, 305)    
    }
  }

  drawFoundYukipoyoCountText () {
    this.gameScreenCtx.font = '15px sans-serif'
    this.gameScreenCtx.fillStyle = "white"
    this.gameScreenCtx.fillText(`${foundYukipoyoCount}ゆきぽよはっけ〜ん`, 110, 220)
    foundYukipoyoCount = 0
  }

  yukipoyoComment () {
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
}