// 柯里化
function curry1(fn) {
  let baseArgs = []
  baseArgs = [...Array.from(arguments).slice(1)]
  const len = fn.length
  return function currying(...args) {
    baseArgs = [...baseArgs, ...args]
    if (len === baseArgs.length) {
      return fn(...baseArgs)
    } else {
      return currying
    }
  }
}
function fa(a, b) {
  let sum = a + b
  return sum
}
const fac = curry1(fa)
const f1 = fac(1)
const f2 = f1(2)
console.log('f2', f2)

// 高级
function curry2(fn) {
  let _args = []
  function currying(...args) {
    _args = [..._args, ...args]
    return currying
  }
  currying.run = function () {
    console.log('_args', _args)
    return _args.reduce(fn, 0)
  }
  return currying
}

function add(a, b) {
  return a + b
}
const result = curry2(add)(1, 2, 3)(4)(5)(6).run()
console.log('result', result)
