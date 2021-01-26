function generateImageURLsArray (name, length) {
  const array = []
  for (let i = 1; i <= length; i++) {
    array.push(`./images/${name}/${i}.png`)
  }
  return array
}