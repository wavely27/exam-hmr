
const fg = document.createDocumentFragment()
let input = document.createElement('input')
input.setAttribute('v-model', true)
let bind = document.createElement('p')
bind.setAttribute('v-bind', true)
fg.appendChild(input)
fg.appendChild(bind)
document.body.appendChild(fg)

const data = {}

// function observer(data, vm) {
//   let _this = vm
//   return this.$data = new Proxy(data, {
//     set(_, prop, value) {
//       console.log(value, ' <=== value');
//       _this.dispatchEvent(new CustomEvent(prop, {
//         detail: value
//       }))
//       return Reflect.set(...arguments)
//     },
//   })
// }

// const ob = observer(data)
// ob.name = '33333'
// setTimeout(function () {
//   ob.name = '222'
// }, 2000)
