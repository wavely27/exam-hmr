console.log('temp ===> ', 1)



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
