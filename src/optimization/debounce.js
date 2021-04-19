function debounce(fn, delay) {
  let timer = null
  return function () {
    const ctx = this, args = arguments
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.call(ctx, ...args)
    }, delay);
  }
}
function throttle(fn, wait) {
  let timer = null
  return function () {
    const ctx = this, args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
        fn.call(ctx, ...args)
      }, wait);
    }
  }
}