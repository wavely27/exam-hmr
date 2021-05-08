function fibonacci(count) {
  let arr = [1, 1]
  if (count === 0 || count === 1) {
    return 1
  }

  for (let i = 2; i <= count; i++) {
    arr[i] = arr[i - 2] + arr[i - 1]
  }
  return arr[count]
}

const result = fibonacci(7)
console.log(result, ' <=== result')
