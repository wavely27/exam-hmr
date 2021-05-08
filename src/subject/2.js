// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

function moveZero(arr) {
  let zeroCount = 0
  const result = arr.filter(num => {
    if (num === 0) {
      zeroCount++
      return false
    }
    return true
  })
  return [...result, ...Array.from({ length: zeroCount }).map(() => 0)]
}

const result = moveZero([0, 1, 0, 3, 12])
console.log(result, ' <=== result');
