console.log('temp ===> ', 1)

var maxDistToClosest = function (seats) {
  let count = 0
  let arrs = [0]
  const left = seats[0]
  const right = seats[seats.length - 1]
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0 && seats[i - 1] === 1) {
      arrs[++count] = 1
    } else if (seats[i] === 0) {
      arrs[count]++
    }
  }
  let sumArr = arrs.map((num, i) => {
    if (left === 0 && i === 0) {
      return num
    }
    if (right === 0 && i === arrs.length - 1) {
      return num
    }
    return Math.floor((num + 1) / 2)
  })
  return Math.max.apply(null, sumArr)
}
const res = maxDistToClosest([0, 1])

// ========================dp==========================================
// const arr = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]
// function maxSum(arr) {
//   const len = arr.length
//   const map = arr.map(ar => [...ar])
//   for (let y = 1; y < len; y++) {
//     if (!map[y]) map[y] = []
//     for (let x = 0; x < map[y].length; x++) {
//       let left1 = map[y - 1][x] ? map[y][x] + map[y - 1][x] : 0
//       let right1 = map[y - 1][x - 1] ? map[y][x] + map[y - 1][x - 1] : 0
//       map[y][x] = Math.max(left1, right1)
//     }
//   }
//   console.log(map, ' <=== map');
//   return Math.max.apply(null, map[len - 1])
// }
// const res = maxSum(arr)
// console.log(res, ' <=== res');

// 1，1，2，3，5，8，13，21，34

// function getFiboResult(len) {
//   const length = len - 1
//   const result = [1, 1]
//   if (length === 0) {
//     return [1]
//   } else if (length === 1) {
//     return [1, 1]
//   }
//   let count = 1
//   function fibo(first, second, array) {
//     if (count === length) {
//       const arr = [...array]
//       return arr
//     }
//     count++
//     const temp = first + second
//     array[count] = temp
//     return fibo(second, temp, array)
//   }
//   const res = fibo(result[0], result[1], result)
//   return res
// }

// const res = getFiboResult(100)
// console.log(res, ' <=== res');

// function sleep(delay) {
//   const start = Date.now()
//   while (start + delay > Date.now()) {}
// }
// const works = [
//   () => {
//     console.log(111, ' <=== 111')
//     sleep(11)
//     console.log(-1, ' <=== -1')
//   },
//   () => {
//     console.log(222, ' <=== 222')
//     sleep(20)
//     console.log(-2, ' <=== -2')
//   },
//   () => {
//     console.log(333, ' <=== 333')
//     sleep(20)
//     console.log(-3, ' <=== -3')
//   },
//   () => {
//     console.log(444, ' <=== 444')
//     sleep(20)
//     console.log(-4, ' <=== -4')
//   },
//   () => {
//     console.log(555, ' <=== 555')
//     sleep(20)
//     console.log(-5, ' <=== -5')
//   },
//   () => {
//     console.log(666, ' <=== 666')
//     sleep(20)
//     console.log(-6, ' <=== -6')
//   },
//   () => {
//     console.log(333, ' <=== 333')
//     sleep(20)
//     console.log(-3, ' <=== -3')
//   },
//   () => {
//     console.log(444, ' <=== 444')
//     sleep(20)
//     console.log(-4, ' <=== -4')
//   },
//   () => {
//     console.log(555, ' <=== 555')
//     sleep(20)
//     console.log(-5, ' <=== -5')
//   },
//   () => {
//     console.log(666, ' <=== 666')
//     sleep(20)
//     console.log(-6, ' <=== -6')
//   },
// ]

// let count = 0
// function animation() {
//   console.log(Date.now(), ' <=== Date.now()')
//   count++
//   if (count < 10) {
//     requestAnimationFrame(animation)
//   }
// }
// requestAnimationFrame(animation)

// function workloop(deadline) {
//   console.log(
//     ' <=== deadline.timeRemaining()',
//     parseInt(deadline.timeRemaining()),
//     deadline.didTimeout
//   )

//   while (
//     (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
//     works.length > 0
//   ) {
//     const work = works.shift()
//     work()
//   }
//   if (works.length > 0) {
//     requestIdleCallback(workloop, {timeout: 500})
//   }
// }

// requestIdleCallback(workloop, {timeout: 500})

// ====================================================================
// function P(name) {
//   this.name = name
//   this.arr = [1,2,3]
// }
// P.prototype.say = function () {
//   console.log(this.arr, ' <===')
// }
// function C(name, age) {
//   P.call(this, name)
//   this.age = age
// }
// C.prototype = P.prototype
// C.prototype = new P()
// C.prototype = Object.create(P.prototype)
// C.prototype.constructor = C
// let p = new P('p')
// let c = new C('c', 2)
// let c1 = new C('c1', 3)
// c.arr.push(4)
// p.say()
// c.say()
// c1.say()
// console.log(p, ' <=== p');
// console.log(c, ' <=== c');
// console.log(c1, ' <=== c1');
// console.log(Object.getPrototypeOf(c).constructor === P.prototype.constructor, ' <=== Object.getPrototypeOf(c).constructor === P.prototype.constructor');

// ====================================================================
// var person = {
//   fullName: function (city, country) {
//     console.log('this', this)
//     return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country
//   },
// }
// var person1 = {
//   firstName: 'Bill',
//   lastName: 'Gates',
// }
// const str = person.fullName.call(person1, 'Seattle', 'USA')
// console.log('fullName: ', str)
// Function.prototype._call = function () {
//   const [ctx, ...rest] = [...arguments]
//   const fn = Symbol('fn')
//   ctx[fn] = this
//   const args = []
//   for (let i = 1; i < arguments.length; i++) {
//     args.push(`arguments[${i}]`)
//   }
//   const result = eval('ctx[fn](' + args + ')')
//   // const result = ctx[fn](...args)
//   delete ctx[fn]
//   return result
// }
// const str1 = person.fullName._call(person1, 'Seattle', 'USA')
// console.log('fullName: ', str1)

// ====================================================================
// const person = {
//   name: 'a'
// }
// Object.defineProperty(person, 'age', {
//   value: 21
// })

// Object.defineProperty(person, 'name', {
//   value: 'b'
// })
// console.log(person, ' <=== person');
// console.log(Object.keys(person), ' <=== Object.keys(person)');

// ====================================================================
// const arr = [1, 1, 1, 3, 3, 3, 2, 2, 2, 2]
// function unique(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index)
// }
// console.log(unique(arr), ' <=== unique(arr)');

// ====================================================================
// const arr = [1,[5, 6, [7]], 2, 3, [4, [5, 6, [7]]]]
// function flat(arr) {
//   return JSON.stringify(arr).replace(/\[|\]/g, '').split(',').map(item => parseInt(item))
// }
// const res = flat(arr)
// console.log(res, ' <=== res');

// ====================================================================
// var x = 2
// var y = {
//   x: 3,
//   z: (function (x) {
//     console.log(x, ' <=== x1');
//     this.x *= x
//     x += 2
//     return function (n) {
//       this.x *= n
//       x += 3
//       console.log(x, ' <=== x2')
//     }
//   })(x),
// }
// var m = y.z
// m(4)
// y.z(5)
// console.log(x, y.x, ' <=== x, y.x')

// ====================================================================
// function getArr(number) {
//   const result = []
//   for (let i = 1; i < number / 2; i++) {
//     let tempArr = [i]
//     let j = 1
//     let sum = i
//     while (sum < number) {
//       let t = i + j
//       sum += t
//       tempArr.push(t)
//       if (sum === number) {
//         result.push(tempArr)
//         break
//       }
//       j++
//     }
//   }
//   return result
// }
// const res = getArr(15)
// console.log(res, ' <=== res')

// ====================================================================
// var x = 0,
//   y = 1
// function fn() {
//   x += 2
//   fn = function (y) {
//     console.log(y + --x, ' <=== y + (--x)')
//   }
//   console.log(x, y, ' <=== x,y')
// }
// fn(3) // 2,1
// fn(4) // 5
// console.log(x, y, ' <=== x, y') // 1 1

// ====================================================================
// var a = {i = 1, valueOf: function() {
//   return this.i++
// }}

// var a = {
//   i = 1,
//   toString() {
//     return this.i++
//   },
// }

// var i = 0
// Object.defineProperty(window, 'a', {
//   get() {
//     return ++i
//   },
// })

// if (a == 1 && a == 2 && a == 3) {
//   console.log(1, ' <=== 1')
// }

// ====================================================================
// function A() {
//   alert(1);
// }
// function Fn() {
//   A = function () {
//     alert(2)
//   }
//   return this
// }
// Fn.A = A;
// Fn.prototype = {
//   A: () => {
//     alert(3)
//   }
// }

// A() // 1
// Fn.A() // 1
// Fn().A() // 2
// new Fn.A() // 2
// new Fn().A() // 3
// new new Fn().A() // err

// ====================================================================
// // 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。

// let s = 'wkerjnkljzxkiodaejklwrafnalfzxvnrnlewkj'
// let t = 'jzxkiodaejklw'

// function _m(string, temp) {
//   const reg = new RegExp(temp)
//   const res = reg.exec(string)
//   return res.index
// }

// console.log(_m(s, t), ' <=== _m(s, t)');
