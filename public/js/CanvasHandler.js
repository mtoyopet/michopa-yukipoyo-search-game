class CanvasHandler {
  constructor () {
    this.canvas = document.getElementById("canvas") // canvas要素を取得
    this.gameScreenCtx = this.canvas.getContext("2d")
    this.row = 1
    this.column = 2
  }

  drawImages () {
    // 表示をクリア
    this.gameScreenCtx.clearRect(0, 0, 375, 375)
    const randomInteger = Math.floor(Math.random() * (this.row * this.column))
    let counter = 0
    for (let i = 0; i < this.column; i++) {
      for (let j = 0; j < this.row; j++) {
        const coordinateX = size.width * i
        const coordinateY = size.height * j
        if (randomInteger === counter) {
          // ゆきぽよの画像を表示する
          imageHandler.correctImageObject.drawOnScreen(coordinateX, coordinateY)
        } else {
          // 外れ画像を表示する
          imageHandler.wrongImagesArray[counter].drawOnScreen(coordinateX, coordinateY)
        }
        counter += 1
      }
    }
  }

  updateRowColumns () {
    if (point.counter < point.numbers.five) {
      this.row = 1
      this.column = 2
    } else if (point.counter < point.numbers.ten) {
      this.row = 2
      this.column = 2
    } else if (point.counter >= point.numbers.ten && point.counter < point.numbers.fifteen) {
      this.row = 3
      this.column = 3
    } else if (point.counter >= point.numbers.fifteen && point.counter < point.numbers.twenty) {
      this.row = 4
      this.column = 4
    } else if (point.counter >= point.numbers.twenty && point.counter < point.numbers.twentyfive) {
      this.row = 5
      this.column = 5
    } else {
      this.row = 6
      this.column = 6
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

  drawMidpointMenu () {
    this.gameScreenCtx.clearRect(0, 0, 375, 375)
    this.gameScreenCtx.fillStyle = 'rgba(255,255,255,0.8)'
    this.gameScreenCtx.fillRect(0, 0, 375, 375)
    this.gameScreenCtx.font = '30px sans-serif'
    this.gameScreenCtx.fillStyle = "#EE4056"
    this.gameScreenCtx.fillText(`${this.row * this.column}枚の写真から`, 85, 188)    
    this.gameScreenCtx.fillText("ゆきぽよを探せ！", 85, 220)
    
    setTimeout(() => {
      game.start()
    }, 1000)
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
    this.gameScreenCtx.fillText(`${point.counter}ゆきぽよはっけ〜ん`, 110, 220)
    point.reset()
  }

  yukipoyoComment () {
    if (point.counter === 0) {
      return "・・・・・やる気あるの？"
    } else if (point.counter >= 1 && point.counter < 5) {
      return "もっと真剣に探しなさい!!" 
    } else if (point.counter >= 5 && point.counter < 10) {
      return "・・ちゃんと集中してた？"
    } else if (point.counter >= 10 && point.counter < 15) {
      return "やっとスタートラインね!!"
    } else if (point.counter >= 15 && point.counter < 20) {
      return "やっと慣れてきた感じね？"
    } else if (point.counter >= 20 && point.counter < 25) {
      return "もしかして私のファン？？"
    } else if (point.counter >= 25 && point.counter < 30) {
      return "いいわね、その調子よ!!"
    } else if (point.counter >= 30 && point.counter < 35) {
      return "まだまだいけるんじゃない?"
    } else if (point.counter >= 35 && point.counter < 40) {
      return "あともう少し頑張れるわよ!"
    } else if (point.counter >= 40 && point.counter < 45) {
      return "最高ね・・褒めてあげるわ"
    } else {
      return "あなたこそ私の真のファン!"
    }
  }
}