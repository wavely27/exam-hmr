// 继承
function say() {
  console.log('say');
}

// 其他继承 拷贝继承、实例继承

// 借助构造函数实现继承
// 缺点：1.不能继承原型链
function Parent1() {
  this.name = 'parent1'
  this.arr = [1, 2, 3]
}
function Child1() {
  Parent1.call(this)
  this.type = 'child1'
}
Parent1.prototype.say = say
const c1 = new Child1()
// console.log('c1 ===> ', c1);
// c1.say() // Error

// 借助原型链实现继承
// 缺点：1.所有子实例的原型对象是同一个父实例，公共属性共用
function Parent2() {
  this.name = 'parent2'
  this.arr = [1, 2, 3]
}
function Child2() {
  this.type = 'child2'
}
Child2.prototype = new Parent2()
Parent2.prototype.say = say
const c2 = new Child2()
const c2_ = new Child2()
c2.arr.push(4)
// console.log('c2.arr ===> ', c2.arr);
// console.log('c2_.arr ===> ', c2_.arr);

// 组合继承
// 缺点：1.父类构造函数执行了两次 2.constructor指向不对
function Parent3() {
  this.name = 'Parent3'
  this.arr = [1, 2, 3]
}
function Child3() {
  Parent3.call(this)
  this.type = 'Child3'
}
Child3.prototype = new Parent3()
Child3.prototype.constructor = Child3
// Child3.prototype = Parent3.prototype

Parent3.prototype.say = say

const c3 = new Child3()
const c3_ = new Child3()
c3.arr.push(4)
// console.log('c3.arr ===> ', c3.arr);
// console.log('c3_.arr ===> ', c3_.arr);
// console.log('c3 instanceof Child3 ===> ', c3 instanceof Child3);
// console.log('c3 instanceof Parent3 ===> ', c3 instanceof Parent3);
// console.log('c3.constructor ===> ', c3.constructor);

// 组合继承优化 best
function Parent4() {
  this.name = 'Parent4'
  this.arr = [1, 2, 3]
}
function Child4() {
  Parent4.call(this)
  this.type = 'Child4'
}
Child4.prototype = Object.create(Parent4.prototype)
Child4.prototype.constructor = Child4
Parent4.prototype.say = say
const c4 = new Child4()
const c4_ = new Child4()
c4.arr.push(4)
console.log('c4 ===> ', c4);
console.log('c4_ ===> ', c4_);
console.log('c4 instanceof Child4 ===> ', c4 instanceof Child4);
console.log('c4 instanceof Parent4 ===> ', c4 instanceof Parent4);
// console.log('c4.constructor ===> ', c4.constructor);

// 寄生组合继承 
function Parent5() {
  this.name = 'Parent5'
  this.arr = [1, 2, 3]
}
function Child5() {
  Parent5.call(this)
  this.type = 'Child5'
}
(function () {
  const Super = function () { }
  Super.prototype = Parent5.prototype
  Child5.prototype = new Super()
  Child5.prototype.constructor = Child5
})()

Parent5.prototype.say = say

const c5 = new Child5()
const c5_ = new Child5()
c5.arr.push(4)
console.log('c5 ===> ', c5);
console.log('c5_ ===> ', c5_);

// console.log('c5.arr ===> ', c5.arr);
// console.log('c5_.arr ===> ', c5_.arr);
// console.log('c5 instanceof Child5 ===> ', c5 instanceof Child5);
// console.log('c5 instanceof Parent5 ===> ', c5 instanceof Parent5);
// console.log('c5.constructor ===> ', c5.constructor);