// 继承：构造继承父类实例属性(call)，原型继承父类原型属性(Object.create)，修复构造器。
function Child() {
  Parent.call(this)
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
// 深拷贝：递归循环，类型判断（base + null\reg\data\arr\obj），循环引用缓存
function deepClone(obj, cache = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let Constructor = obj.constructor
  if (Constructor === Date) {
    return Constructor(obj.getTime())
  } else if (Constructor === RegExp) {
    return Constructor(obj)
  }
  if (cache[obj]) {
    return cache[obj]
  }
  let result = Array.isArray(obj) ? [] : {}
  cache[obj] = result
  Object.keys(obj).forEach((key) => {
    result[key] = deepClone(obj[key], cache)
  })
  return result
}
// debounce throttle 判断timer，返回函数，fn.call
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
// rAF
let i = 0
function move(timestamp) {
  el.style.transform = 'translateX(' + (i) + 'px)';
  if (i < 200) {
    i++
    window.requestAnimationFrame(move);
  }
}
window.requestAnimationFrame(move)
// 手写call：最终this指向，当前this（fn）临时绑定到最终this，构造参数，eval 执行字符串
Function.prototype._call = function (context) {
  context = context ? Object.create(context) : window
  const fn = Symbol('fn')
  context[fn] = this
  const args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push(`arguments[${i}]`)
  }
  const result = eval('context[fn](' + args + ')')
  delete context[fn]
  return result
}
// bind：返回函数 创建新ctx，创建临时属性，返回函数
Function.prototype._bind = function (context) {
  context = context ? Object.create(context) : window
  context[Symbol('fn')] = this
  let args = arguments
  return function () {
    return context[fn].call(context, ...args) // delete
  }
}
// 快速排序：判断长度是否大于1，左右数组，递归链接
function quick(list) {
  let base = list[0], left = [], right = []
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
// promise
class Promise {
  constructor(fn) {
    this.status = 'pending';
    this.resolve = undefined;
    this.reject = undefined;
    let resolve = value => {
      if (this.status === 'pending') {
        this.status = 'resovled'
        this.resolve = value
      }
    }
    let reject = value => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reject = value
      }
    }
    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  then(onResolved, onRejected) {
    switch (this.status) {
      case 'resolved': onResolved(this.resolve); break;
      case 'rejected': onRejected(this.reject); break;
    }
  }
}
// all
return new Promise(function (resolve, reject) {
  for (let i = 0; pm[i]; i++) {
    Promise.resolve(pm[i]).then(function (res) {
      result[i] = res
      count++;
      if (count === len) {
        resolve(res)
      }
    }, function (err) {
      reject(err)
    })
  }
})
// race
return new Promise(function (resolve, reject) {
  for (let i = 0; i < pm.length; i++) {
    Promise.resolve(pm[i]).then(function (res) {
      resolve(res)
    }, function (err) {
      reject(errs)
    })
  }
})
// allSettled
result[i] = { status: 'fulfilled', value: res };
result[i] = { status: 'rejected', value: err };
// 双向绑定
function observer(data, vm) {
  let _this = vm
  this.$data = new Proxy(data, {
    set(_, prop, value) {
      console.log(value, ' <=== value');
      _this.dispatchEvent(new CustomEvent(prop, {
        detail: value
      }))
      return Reflect.set(...arguments)
    },
  })
}
// compose 洋葱模型
function compose(args) {
  return function () {
    const ctx = {
      point: 0,
      args: [...args],
      next: function () {
        this.dispatch(++this.point)
      },
      dispatch: function (index) {
        const fn = this.args[index]
        fn && fn(ctx)
      }
    }
    ctx.dispatch(0)
    return ctx
  }
}

// API
const reg = /(\d)\1{3,}/g
const s = '122333444455555666666'
const maList = [...s.matchAll(reg)] // [Array(2), Array(2), Array(2)]
const mList = s.match(reg) // ["4444", "55555", "666666"]
const itemFunc = s.replace(reg, token => token.slice(0, 3)) // 122333444555666