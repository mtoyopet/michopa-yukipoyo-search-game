const imagesLengthObject = {
  michopa: 25,
  anmika: 3
}

function generateHazureImageObject () {
  let counter = 0
  for (key in imagesLengthObject) {
    counter++
    for (let i = 1; i <= imagesLengthObject[key]; i++) {
      let image = new Image()
      image.onload = () => {
        console.log("image loaded")
      }
      image.src = `./images/${key}/${i}.png`
      image.personName = key
      image.titleText = key === "michopa" ? "それ、みちょぱ😭😭" : "アンミカやないかい・・・"

      hazureImagesObject[counter] = image
      counter++
    }
  }
}

function generateHazureImagesArray () {
  let indexes = []
  let images = []
  let length = calculateImagesLength()

  while (indexes.length < 10) {
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