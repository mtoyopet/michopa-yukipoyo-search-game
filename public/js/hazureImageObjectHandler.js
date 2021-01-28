const imagesLengthObject = {
  yukipoyo: 31,
  michopa: 25,
  anmika: 3
}

function generateHazureImageObject () {
  let counter = 0
  for (key in imagesLengthObject) {
    if (key === "yukipoyo") { continue }
    counter++
    for (let i = 1; i <= imagesLengthObject[key]; i++) {
      let image = new Image()
      image.onload = () => {
        console.log("image loaded")
      }
      image.src = `./images/${key}/${i}.png`
      image.personName = key
      image.titleText = key === "michopa" ? "それ、みちょぱな😭😭" : "節子、それアンミカや"
      hazureImagesObject[counter] = image
      counter++
    }
  }
}

function generateHazureImagesArray () {
  // 表示する外れ画像の配列を作る
  let indexes = []
  let images = []
  let length = calculateImagesLength()

  while (indexes.length < 9) {
    const index = randomInt(length)
    if (!indexes.includes(index)) {
      if (!hazureImagesObject[index]) { continue }
      images.push(hazureImagesObject[index])
      indexes.push(index)  
    }
  }
  return images
}

function calculateImagesLength () {
  let length = 0
  for (const key in imagesLengthObject) {
    length = length + imagesLengthObject[key]
  }
  return length
}

function selectYukipoyoImage (callback) {
  const index = randomInt(imagesLengthObject.yukipoyo) + 1
  yukipoyoDisplayImageObject = new Image()
  yukipoyoDisplayImageObject.src = `./images/yukipoyo/${index}.png`
  yukipoyoDisplayImageObject.onload = () => {
    callback()
  }
}