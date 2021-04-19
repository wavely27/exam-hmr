var person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country
  },
}
var person1 = {
  firstName: 'Bill',
  lastName: 'Gates',
}

const str = person.fullName.bind(person1, 'Seattle', 'USA')()
console.log('fullName: ', str)

// ======================================
// 1.判断context是否为object，如果是object就代表可能是Object 或者 null，如果不是就赋值一个空对象
// 2.在context下挂载一个 临时函数
// 3.解析参数
// 4.调用 eval 方法，执行临时函数
// 5.返回临时函数

Function.prototype._bind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Expect type Function.')
  }
  if (typeof context === 'object' && !(context instanceof Array)) {
    context = context || window
  } else {
    context = Object.create(null)
  }
  const fn = Symbol('fn')
  context[fn] = this

  let thisArg = this

  const args = []
  const argsForEval = []
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i])
    argsForEval.push(`args[${i - 1}]`)
  }
  const resultEval = function () {
    const result = eval('context[fn](' + argsForEval + ')')

    delete context[fn]
    return result
  }

  const resultFn = function () {
    const result = context[fn](...args)
    delete context[fn]
    return result
  }

  const resultApply = function () {
    let _ctx = this instanceof thisArg ? this : context
    const result = context[fn].apply(_ctx, args)
    delete context[fn]
    return result
  }

  const resultCall = function (...rest) {
    return context[fn].call(context, ...args, ...rest)
  }
  result = resultApply
  if (this.prototype) {
    result.prototype = this.prototype
  }
  return result
}

// ======================================

const str1 = person.fullName._bind(person1, 'Seattle', 'USA')()
console.log('fullName: ', str1)


Function.prototype._bind = function (context) {
  context = context ? Object.create(context) : window
  context[Symbol('fn')] = this
  return function (...rest) {
    return context[fn].call(context, ...args, ...rest)
  }
}