
const fg = document.createDocumentFragment()
let input = document.createElement('input')
input.setAttribute('v-model', true)
let bind = document.createElement('p')
bind.setAttribute('v-bind', true)
fg.appendChild(input)
fg.appendChild(bind)
document.body.appendChild(fg)

// ==================== data对象
const data = {
  name: 'init'
}

// ====================== defineProperty + 装饰器模式 + 发布订阅 + 监听器 + 订阅者 + 指令解析器
// 1.数据监听器Observer，能够对数据对象的所有属性进行监听;
// 实现数据的双向绑定，首先要对数据进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性

// 改1
function Observer(data) {
  this.data = data
  this.walk(data)
}
Observer.prototype = {
  walk: function (data) {
    const self = this;
    Object.keys(data).forEach(function (key) {
      self.defineReactive(data, key, data[key]);
    })
  },
  defineReactive: function (data, key, val) {
    observers(val)
    var dep = new Dep();
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get: function () {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        console.log(key, ' <=== get');
        return val
      },
      set: function (newVal) {
        val = newVal
        dep.notify()
        console.log(key, val, ' <=== set');
      }
    })
  }
}
function observers(data) {
  if (!data || typeof data != 'object') {
    return
  }
  return new Observer(data)
}
function Dep() {
  this.subs = []
  this.target = null;
}
Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub)
  },
  notify: function () {
    this.subs.forEach(function (sub) {
      sub.update()
    })
  }
}
function Watcher(vm, exp, cb) {
  this.vm = vm
  this.exp = exp
  this.cb = cb
  this.value = this.get()
}
Watcher.prototype = {
  update: function () {
    this.run();
  },
  run: function () {
    let value = this.vm.data[this.exp]
    let oldVal = this.value
    if (value != oldVal) {
      this.value = value
      this.cb.call(this.vm, value, oldVal)
    }
  },
  get: function () {
    Dep.target = this;
    let value = this.vm.data[this.exp]
    Dep.target = null;
    return value
  }
}

function SelfVue(data, el, exp) {
  this.data = data
  observers(data)
  el.innerHTML = this.data[exp]
  new Watcher(this, exp, function (value) {
    console.log(1, ' <=== ');

    el.innerHTML = value
  })
  return this
}

const sv = new SelfVue(data, bind, 'name')

setTimeout(function () {
  sv.data.name = 'test'
}, 3000)

// ====================== 基础defineProperty

// let txt = document.querySelector('[v-model]')
// txt.oninput = function () {
//   data.id = txt.value
// }

// const cache = {}

// Object.defineProperty(data, 'id', {
//   // configurable: false 不可修改
//   // enumerable: false 不可枚举
//   // writable: false 只读
//   // value
//   // get() {}
//   // set() {}
//   get() {
//     console.log('get()', cache['id']);
//     return cache['id']
//   },
//   set(value) {
//     console.log('set()');
//     cache['id'] = value
//     let list = document.querySelectorAll('[v-bind]')
//     for (let i = 0; i < list.length; i++) {
//       list[i].innerHTML = value
//     }
//   }
// })