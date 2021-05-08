let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

// ES6
function flat(arr) {
  return arr.flat(Infinity)
}

// toString
function flatByString(arr) {
  return arr
    .toString()
    .split(',')
    .map((string) => parseInt(string))
}

function flatByJSON(arr) {
  return JSON.stringify(arr)
    .replace(/(\[|\])/g, '')
    .split(',')
    .map((string) => parseInt(string))
}

function flatBySome(arr) {
  let result = [...arr]
  while (result.some((item) => Array.isArray(item))) {
    result = [].concat(...result)
  }
  return result
}

const flatResult = flat(arr)
const flatByStringResult = flatByString(arr)
const flatByJSONResult = flatByJSON(arr)
const flatBySomeResult = flatBySome(arr)
console.log(flatResult, ' <=== flat result')
console.log(flatByStringResult, ' <=== flatByString result')
console.log(flatByJSONResult, ' <=== flatByJSON result')
console.log(flatBySomeResult, ' <=== flatBySome result')
