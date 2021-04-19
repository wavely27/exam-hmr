const A = function () { }
const B = new Function()
const a = new A()

Object.prototype.a = function () {
  console.log('a');
}
Function.prototype.b = function () {
  console.log('b');
}

console.log([a], ' <=== [a]');
console.log([A], ' <=== [A]');
console.log([B], ' <=== [B]');
console.log(a.__proto__ === A.prototype, ' <=== a.__proto__ === A.prototype');
console.log(A.__proto__ === Function.prototype, ' <=== A.__proto__ === Function.prototype');
console.log(B.__proto__ === Function.prototype, ' <=== B.__proto__ === Function.prototype');
console.log(A.prototype.constructor === A, ' <=== A.prototype.constructor === A');
console.log(A.prototype.__proto__ === Object.prototype, ' <=== A.prototype.__proto__ === Object.prototype');
console.log(Object.__proto__ === Function.prototype, ' <=== Object.__proto__ === Function.prototype');
console.log(Function.__proto__ === Function.prototype, ' <=== Function.__proto__ === Function.prototype');
console.log(Object.prototype === Function.__proto__.__proto__, ' <=== Object.prototype === Function.__proto__.__proto__');

a.a()
a.b()