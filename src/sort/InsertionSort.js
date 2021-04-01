function insertionSort(array) {
  if (typeof array !== 'object' || !array.length) return
  const arr = [...array]
  const len = arr.length
  let temp
  for (let i = 1; i < len; i++) {
    temp = arr[i]
    // 前半部分有序, 后半部分无序, 从无序序列中拿出一个元素, 从后往前扫描，插入有序序列
    let j = i - 1
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr
}

// 二分插入排序
function binaryInsertionSort(array) {
  if (typeof array !== 'object' || !array.length) return
  const arr = [...array]
  const len = arr.length
  let temp
  for (let i = 1; i < len; i++) {
    temp = arr[i]
    let left = 0,
      right = i - 1
    while (left <= right) {
      let middle = Math.floor((left + right) / 2)
      if (temp < arr[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
    for (let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j]
    }
    arr[left] = temp
  }
  return arr
}

export default {
  insertionSort,
  binaryInsertionSort,
}
