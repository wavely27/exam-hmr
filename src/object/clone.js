// json
// 浅拷贝 Object.assgin Object.create Array.concat() slice() Array.from() 扩展运算符 lodash.cloneDeep
// 递归，循环引用，特殊对象类型，Symbol

function deepClone(obj, cache) {
  if (typeof obj !== 'object' || obj === null) return obj
  const Constructor = obj.constructor
  if (Constructor === RegExp) {
    return Constructor(obj)
  } else if (Constructor === Date) {
    return Constructor(obj.getTime())
  }
  if (!cache) cache = new WeakMap()
  if (cache.has(obj)) return cache.get(obj)
  let result = Array.isArray(obj) ? [] : {}
  cache.set(obj, result)
  const arr = [
    ...Object.getOwnPropertyNames(obj),
    ...Object.getOwnPropertySymbols(obj),
  ]
  arr.forEach((key) => {
    result[key] = deepClone(obj[key], cache)
  })
  return result
}

// 数组
// if (!cache) cache = []
// const map = cache.indexOf(obj)
// if (map > -1) {
//   return cache[map + 1]
// }
// cache.push(obj)
// let result = Array.isArray(obj) ? [] : {}
// cache.push(result)
// ===================

function objClass() {
  this.go = function () {
    console.log(10, ' <=== 10');
  }
}

const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: {
      e: 3,
    },
  },
  f: [{ x: 1 }, { y: 2 }, { z: 3 }],
  r: /r/,
  d: new Date('2020/04/04'),
  fn: deepClone,
  [Symbol('s')]: 'ss',
}

const obj2 = {
  d: new Date(),
  [Symbol('s')]: 'ss',
  fn: deepClone,
  r: /r/,
  f: [{ z: 3 }, { x: 1 }, { y: 2 }],
  c: { d: { e: 3 } },
  b: 2,
  a: 1,
}

// 添加继承
Object.setPrototypeOf(obj1, objClass.prototype)

obj1.next = obj2
obj2.next = obj1

const obj3 = deepClone(obj2)

// console.log('obj2 ===> ', obj2)
// console.log('obj3 ===> ', obj3)

const obj4 = deepCloneRecursion(obj1)

// 没有其他类型对象 没有循环引用
function deepCloneJson(target) {
  return JSON.parse(JSON.stringify(target))
}

function deepCloneRecursion(target, cache = new Map()) {
  // 判断基本类型
  if (typeof target !== 'object' || target === null) return target
  // 判断特殊对象类型
  if (target instanceof RegExp || target instanceof Date) {
    const Constructor = Object.getPrototypeOf(target).constructor
    return new Constructor(target)
  }
  // 判断循环引用
  if (cache.has(target)) {
    return cache.get(target)
  }
  // 修复继承关系
  // 判断函数
  const result = Array.isArray(target) ? [] : new target.constructor()
  cache.set(target, result)
  const map = [
    ...Object.getOwnPropertyNames(target), // 过滤非私有
    ...Object.getOwnPropertySymbols(target), // 包含Symbol类型
  ]
  map.forEach((key) => {
    result[key] = deepCloneRecursion(target[key], cache)
  })
  return result
}

console.log('obj1 ===> ', obj1)
console.log('obj4 ===> ', obj4)
console.log(obj4.fn, ' <=== obj4.fn')
const arr4 = Object.getOwnPropertySymbols(obj4)
const arr1 = Object.getOwnPropertySymbols(obj1)
console.log(
  obj4[arr4[0]] === obj1[arr1[0]],
  ' <=== obj4[arr[0]] === obj1[arr1[0]]'
)

console.log(obj1 instanceof objClass, ' <=== obj1 instanceof objClass');
console.log(obj4 instanceof objClass, ' <=== obj4 instanceof objClass');
