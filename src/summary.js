// 继承：构造继承父类实例属性(call)，原型继承父类原型属性(Object.create)，修复构造器。
function Child() {
  Parent.call(this)
  this.type = 'Child'
}
Child4.prototype = Object.create(Parent4.prototype)
Child4.prototype.constructor = Child4
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

// API
const reg = /(\d)\1{3,}/g
const s = '122333444455555666666'
const maList = [...s.matchAll(reg)] // [Array(2), Array(2), Array(2)]
const mList = s.match(reg) // ["4444", "55555", "666666"]
const itemFunc = s.replace(reg, token => token.slice(0, 3)) // 122333444555666