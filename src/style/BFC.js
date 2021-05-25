import './index.css'


const wrap = document.createElement('div')
wrap.setAttribute('id', 'wrap')
const father = document.createElement('div')
father.setAttribute('id', 'father')
const child1 = document.createElement('div')
child1.setAttribute('id', 'child1')
child1.setAttribute('class', 'child')
const child2 = document.createElement('div')
child2.setAttribute('id', 'child2')
child2.setAttribute('class', 'child')
const child3 = document.createElement('div')
child3.setAttribute('id', 'child3')
child3.setAttribute('class', 'child')

father.appendChild(child1)
father.appendChild(child2)
father.appendChild(child3)

wrap.appendChild(father)

document.body.appendChild(wrap)