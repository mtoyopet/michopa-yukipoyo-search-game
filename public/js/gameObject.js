class GameObject {
  constructor(src, personName, width = 125, height = 125) {
    this.image = new Image()
    this.image.src = src
    this.image.personName = personName
    this.image.titleText = defineTitleText(personName)
    this.size = new Size(width, height)
    this.isLoaded = false
    this.position = new Position(0, 0)
    this.image.onload = () => {
      this.image.isLoaded = true
    }

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
    gameScreenCtx.drawImage(this.image, positionX, positionY, this.size.width, this.size.height)
  }

  updatePosition (positionX, positionY) {
    this.position.x = positionX
    this.position.y = positionY
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