class GameObject {
  constructor(src, personName) {
    this.image = new Image()
    this.image.src = src
    this.image.personName = personName
    this.image.titleText = defineTitleText(personName)
    this.size = new Size()
    this.position = new Position(0, 0)

    function defineTitleText (personName) {
      if (personName === "michopa") {
        return "それ、みちょぱな😭😭"
      } else if (personName === "anmika") {
        return "節子、それアンミカや"
      } else if (personName === "kurochan") {
        return "わわわわあぁ〜〜♡♡"
      }
      return ""
    }
  }

  drawOnScreen(positionX, positionY) {
    this.updatePosition(positionX, positionY) 
    canvas.gameScreenCtx.drawImage(this.image, positionX, positionY, this.size.width, this.size.height)
  }

  updatePosition (positionX, positionY) {
    this.position.x = positionX
    this.position.y = positionY
  }

  updateSize () {
    this.size.update()
  }
}