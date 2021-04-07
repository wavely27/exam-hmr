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

function quick(list) {
  let base = list[0]
  let left = []
  let right = []
  if (list.length > 1) {
    for (let i = 1; i < list.length; i++) {
      if (list[i] < base) {
        left.push(list[i])
      } else {
        right.push(list[i])
      }
    }
    return quick(left).concat([base], quick(right))
  } else {
    return list
  }
}

const list = Array.from({ length: 10 }).map(() => ~~(Math.random() * 1000))

const arr = quick(list)
console.log('arr', arr)
