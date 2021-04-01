function bubbleSort(array) {
  if (typeof array !== 'object' || !array.length) return
  const arr = [...array]
  const len = arr.length
  // 向后两两比较，大值向后冒泡，每轮比较得出一个最大值，让在尾部有序序列头部
  for (let i = 0; i < len; i++) {
    // 已比较次数
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

function bubbleSortPoint(array) {
  if (typeof array !== 'object' || !array.length) return
  const arr = [...array]
  const len = arr.length
  // 向后两两比较，大值向后冒泡，每轮比较得出一个最大值，让在尾部有序序列头部
  let point = len - 1
  // 操作时记录位置, 后面没有操作的部分说明本身就是有序的, 下次不用遍历
  while (point > 0) {
    let tempPoint = 0 // 临时标记
    // 已比较完成的位置
    for (let j = 0; j < point; j++) {
      if (arr[j] > arr[j + 1]) {
        tempPoint = j // 记录最后一次排序操作
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    point = tempPoint
  }
  return arr
}

function bubbleSortClose(array) {
  if (typeof array !== 'object' || !array.length) return
  const arr = [...array]
  const len = arr.length
  // 大值向后冒泡
  let high = len - 1
  let low = 0
  while (low < high) {
    let tempPoint = low // 临时标记
    // 已比较完成的位置
    for (let j = low; j < high; j++) {
      if (arr[j] > arr[j + 1]) {
        tempPoint = j // 记录最后一次排序操作
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    high = tempPoint
    for (let j = high; j > low; j--) {
      if (arr[j] < arr[j - 1]) {
        tempPoint = j // 记录最后一次排序操作
        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      }
    }
    low = tempPoint
  }
  return arr
}

export default {
  bubbleSort,
  bubbleSortPoint,
  bubbleSortClose,
}
