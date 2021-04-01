function quickSort(array, left, right) {
  if (typeof array !== 'object' || !array.length) return
  const arr = [...array]
  if (left < right) {
    let standard = arr[left]
    let point = left

    for (let i = left; i < right; i++) {
      if (arr[i] < standard) {
        point++
        let temp = arr[point]
        arr[point] = arr[j]
        arr[j] = temp
      }
      standard = arr[i]
      quickSort(arr, left, point - 1)
      quickSort(arr, point + 1, right)
    }
  }
}

export default {
  quickSort,
}

// 3, 2, 5, 7, 9
