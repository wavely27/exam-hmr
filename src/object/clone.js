// json
// 浅拷贝 Object.assgin Object.create Array.concat() slice() Array.from() 扩展运算符 lodash.cloneDeep
// 递归，循环引用，特殊对象类型

function deepClone(obj, cache) {
  if (typeof obj !== 'object' || obj === null) return obj
  const Constructor = obj.constructor
  if (Constructor === RegExp) {
    return Constructor(obj)
  } else if (Constructor === Date) {
    return Constructor(obj.getTime())
  }
  if (!cache) cache = new WeakMap()
  if (cache[obj]) return cache[obj]
  let result = Array.isArray(obj) ? [] : {}
  cache[obj] = result
  Object.keys(obj).sort().forEach((key) => {
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

const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: {
      e: 3
    }
  },
  f: [{ x: 1 }, { y: 2 }, { z: 3 }],
  r: /r/,
  fn: deepClone
}

const obj2 = {
  fn: deepClone,
  r: /r/,
  f: [{ z: 3 }, { x: 1 }, { y: 2 }],
  c: { d: { e: 3 } },
  b: 2,
  a: 1,
}

obj1.next = obj2
obj2.next = obj1

const obj3 = deepClone(obj2)

console.log('obj2 ===> ', obj2);
console.log('obj3 ===> ', obj3);


