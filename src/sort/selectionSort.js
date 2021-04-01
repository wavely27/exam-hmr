function selectionSort(array) {
  if (typeof array !== 'object' || !array.length) return
  const arr = [...array]
  const len = arr.length
  for (let i = 0; i < len; i++) {
    // 遍历无序序列一次找到最小值,放入有序序列末尾
    let minPoint = i
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minPoint]) {
        minPoint = j
      }
    }
    let temp = arr[minPoint]
    arr[minPoint] = arr[i]
    arr[i] = temp
  }
  return arr
}

export default {
  selectionSort,
}
