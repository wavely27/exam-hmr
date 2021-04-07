var person = {
  fullName: function (city, country) {
    console.log('this', this)
    return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country
  },
}
var person1 = {
  firstName: 'Bill',
  lastName: 'Gates',
}

const str = person.fullName.call(person1, 'Seattle', 'USA')
console.log('fullName: ', str)

// ======================================
// 1.判断context是否为object，如果是object就代表可能是Object 或者 null，如果不是就赋值一个空对象
// 2.在context下挂载一个 临时函数
// 3.解析参数
// 4.调用 eval 方法，执行临时函数
// 5.删除临时函数 返回执行结果

Function.prototype._call = function (context) {
  console.log('context', context)

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

// ======================================

const str1 = person.fullName._call(person1, 'Seattle', 'USA')
console.log('fullName: ', str1)

function fn1() {
  console.log(this, 1)
}

function fn2() {
  console.log(this, 2)
}

fn1._call(fn2)
fn1.call.call.call.call(fn2)
