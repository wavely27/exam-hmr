var person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country
  },
}
var person1 = {
  firstName: 'Bill',
  lastName: 'Gates',
}

const str = person.fullName.apply(person1, ['Seattle', 'USA'])
console.log('fullName: ', str)

// ======================================
// 1.判断context是否为object，如果是object就代表可能是Object 或者 null，如果不是就赋值一个空对象
// 2.在context下挂载一个 临时函数
// 3.判断参数是否类数组对象 解析参数
// 4.调用 eval 方法，执行临时函数
// 5.删除临时函数 返回执行结果

Function.prototype._apply = function (context, array) {
  if (typeof context === 'object' && !(context instanceof Array)) {
    context = context || window
  } else {
    context = Object.create(null)
  }
  const fn = Symbol('fn')
  context[fn] = this
  const args = []
  if (typeof array === 'object') {
    for (let i = 0; i < array.length; i++) {
      args.push(`array[${i}]`)
    }
  } else {
    throw new TypeError('Arguments expect Array or ArrayLike type.')
  }

  const result = eval('context[fn](' + args + ')')
  delete context[fn]
  return result
}

// ======================================

const str1 = person.fullName._apply(person1, ['Seattle', 'USA'])
console.log('fullName: ', str1)
