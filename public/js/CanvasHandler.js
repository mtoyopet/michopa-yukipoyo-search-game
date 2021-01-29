class CanvasHandler {
  constructor () {
    this.canvas = document.getElementById("canvas") // canvas要素を取得
    this.gameScreenCtx = this.canvas.getContext("2d")
  }

  drawImages () {
    // 表示をクリア
    this.gameScreenCtx.clearRect(0, 0, 375, 375)
    const randomInteger = Math.floor(Math.random() * 9)
    let counter = 0
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const coordinateX = size.width * i
        const coordinateY = size.height * j
        if (randomInteger === counter) {
          // ゆきぽよの画像を表示する
          imageHandler.yukipoyoImageObject.drawOnScreen(coordinateX, coordinateY)
        } else {
          // 外れ画像を表示する
          imageHandler.wrongImagesArray[counter].drawOnScreen(coordinateX, coordinateY)
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
      this.gameScreenCtx.drawImage(imageHandler.kurochanCommentImage.image, 30, 250, 125, 125)
      this.gameScreenCtx.drawImage(imageHandler.fukidashiImage.image, 120, 240, 250, 120)
      this.gameScreenCtx.font = '14px sans-serif'
      this.gameScreenCtx.fillStyle = "black"
      this.gameScreenCtx.fillText("君が大好きだしんよ♡♡♡", 163, 305)
    } else {
      this.gameScreenCtx.drawImage(imageHandler.yukipoyoCommentImage.image, 30, 250, 125, 125)
      this.gameScreenCtx.drawImage(imageHandler.fukidashiImage.image, 120, 240, 250, 120)
      this.gameScreenCtx.font = '14px sans-serif'
      this.gameScreenCtx.fillStyle = "black"
      this.gameScreenCtx.fillText(this.yukipoyoComment(), 163, 305)    
    }
  }

  drawPoint () {
    this.gameScreenCtx.font = '15px sans-serif'
    this.gameScreenCtx.fillStyle = "white"
    this.gameScreenCtx.fillText(`${pointHandler.point}ゆきぽよはっけ〜ん`, 110, 220)
    pointHandler.reset()
  }

  yukipoyoComment () {
    if (pointHandler.point === 0) {
      return "・・・・・やる気あるの？"
    } else if (pointHandler.point >= 1 && pointHandler.point < 5) {
      return "もっと真剣に探しなさい!!" 
    } else if (pointHandler.point >= 5 && pointHandler.point < 10) {
      return "・・ちゃんと集中してた？"
    } else if (pointHandler.point >= 10 && pointHandler.point < 15) {
      return "やっとスタートラインね!!"
    } else if (pointHandler.point >= 15 && pointHandler.point < 20) {
      return "やっと慣れてきた感じね？"
    } else if (pointHandler.point >= 20 && pointHandler.point < 25) {
      return "もしかして私のファン？？"
    } else if (pointHandler.point >= 25 && pointHandler.point < 30) {
      return "いいわね、その調子よ!!"
    } else if (pointHandler.point >= 30 && pointHandler.point < 35) {
      return "まだまだいけるんじゃない?"
    } else if (pointHandler.point >= 35 && pointHandler.point < 40) {
      return "あともう少し頑張れるわよ!"
    } else if (pointHandler.point >= 40 && pointHandler.point < 45) {
      return "最高ね・・褒めてあげるわ"
    } else {
      return "あなたこそ私の真のファン!"
    }
  }
}