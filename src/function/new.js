function Person(firtName, lastName) {
  this.firtName = firtName
  this.lastName = lastName
}

Person.prototype.getFullName = function () {
  return `${this.firtName} ${this.lastName}`
}

const tb = new Person('Chen', 'Tianbao')
console.log('tb', tb)

// ======================================
// 1.创建一个新的对象
// 2.继承父类原型上的方法.
// 3.添加父类的属性到新的对象上并初始化. 保存方法的执行结果.
// 4.如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象。

export function _new(Class, ...rest) {
  const obj = Object.create(Class.prototype)
  const result = Class.call(obj, ...rest)
  return typeof result === 'object' ? result : obj
}

// ======================================

const _tb = _new(Person, 'Chen', 'Tianbao')
console.log('_tb', _tb)

const str = _tb.getFullName()
console.log('getFullName: ', str)
 