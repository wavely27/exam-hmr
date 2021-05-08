// 数组去重
const arr = Array.from({ length: 20 }).map((_) => Math.ceil(Math.random() * 10))

// 利用数据结构
function uniqueBySet(arr) {
  // 基础数据类型
  const newArr = [...arr]
  return [...new Set(newArr)]
  // return Array.from(new Set(arr))
}
function uniqueByMap(arr) {
  const newArr = [...arr]
  const result = []
  const map = new Map()
  newArr.forEach((key) => map.set(key, 1))
  map.forEach((v, k, m) => {
    result.push(k)
  })
  return result
}

// 判断原数组中是否重复, 去除重复元素
function uniqueByForFor(arr) {
  const newArr = [...arr]
  for (let i = 0; i < newArr.length; i++) {
    for (let j = newArr.length - 1; j > i; j--) {
      if (newArr[i] === newArr[j]) {
        newArr.splice(j, 1)
        j++
      }
    }
  }
  return newArr
}
function uniqueByFilter(arr) {
  const newArr = [...arr]
  return newArr.filter((item, index) => arr.indexOf(item) === index)
}

// 判断新数组中是否存在, 不存在则添加
function uniqueByReducer(arr) {
  const newArr = [...arr]

  return newArr.reduce(
    (pre, cur) => (pre.includes(cur) ? pre : [...pre, cur]),
    []
  )
}
function uniqueByIndexOf(arr) {
  const newArr = [...arr]
  const result = []
  for (let i = 0; i < newArr.length; i++) {
    if (result.indexOf(newArr[i]) === -1) {
      result.push(newArr[i])
    }
  }
  return result
}
function uniqueByIncludes(arr) {
  const newArr = [...arr]
  const result = []
  for (let i = 0; i < newArr.length; i++) {
    if (!result.includes(newArr[i])) {
      result.push(newArr[i])
    }
  }
  return result
}

const uniqueBySetResult = uniqueBySet(arr)
const uniqueByMapResult = uniqueByMap(arr)
const uniqueByForForResult = uniqueByForFor(arr)
const uniqueByFilterResult = uniqueByFilter(arr)
const uniqueByReducerResult = uniqueByReducer(arr)
const uniqueByIndexOfResult = uniqueByIndexOf(arr)
const uniqueByIncludesResult = uniqueByIncludes(arr)
console.log(uniqueBySetResult, ' <=== uniqueBySet result')
console.log(uniqueByMapResult, ' <=== uniqueByMap result')
console.log(uniqueByForForResult, ' <=== uniqueByForFor result')
console.log(uniqueByFilterResult, ' <=== uniqueByFilter result')
console.log(uniqueByReducerResult, ' <=== uniqueByReducer result')
console.log(uniqueByIndexOfResult, ' <=== uniqueByIndexOf result')
console.log(uniqueByIncludesResult, ' <=== uniqueByIncludes result')
