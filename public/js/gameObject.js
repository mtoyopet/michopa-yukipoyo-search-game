class GameObject {
  constructor(src, personName, width = 125, height = 125) {
    this.image = new Image()
    this.image.src = src
    this.image.personName = personName
    this.image.titleText = defineTitleText(personName)
    this.size = new Size(125, 125)

    function defineTitleText (personName) {
      if (personName === "michopa") {
        return "それ、みちょぱな😭😭"
      } else if (personName === "anmika") {
        return "節子、それアンミカや"
      } else if (personName === "kurochan") {
        return "わわわわあぁ〜〜♡♡"
      }
    }
  }

  drawOnScreen(positionX, positionY) {
    this.updatePosition(positionX, positionY) 
    gameScreenCtx.drawImage(this.image, positionX, positionY, this.size.width, this.size.height)
  }

  updatePosition (positionX, positionY) {
    this.position = new Position(positionX, positionY)
  }
}

class Position {
  constructor (positionX, positionY) {
    this.x = positionX
    this.y = positionY
  }
}

class Size {
  constructor (width, height) {
    this.width = width
    this.height = height
  }
}