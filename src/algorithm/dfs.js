// 深度优先遍历 DFS

const tree = {
  id: -1,
  children: [
    {
      id: 0,
      children: [
        {
          id: 1,
          children: [
            {
              id: 5,
              children: [],
            },
            {
              id: 8,
              children: [
                {
                  id: 9,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          children: [],
        },
      ],
    },
    {
      id: 6,
      children: [
        {
          id: 10,
          children: [],
        },
      ],
    },
    {
      id: 7,
      children: [],
    },
  ],
}

const resRe = deepTraversalRe(tree)
const resStack = deepTraversalStack(tree)
const resRF = rootFisrtSearch(tree)
const resLF = leafFisrtSearch(tree)
console.log(resRe, ' <=== resRe')
console.log(resStack, ' <=== resStack')
console.log(resRF, ' <=== resRF')
console.log(resLF, ' <=== resLF')

// 递归
function deepTraversalRe(node, result = []) {
  if (node) {
    result.push(node.id)
    let { children } = node
    children.forEach((item) => deepTraversalRe(item, result))
  }
  return result
}

// 使用栈
function deepTraversalStack(root) {
  const result = []
  const stack = []
  stack.push(root)
  while (stack.length) {
    const current = stack.pop()
    result.push(current.id)
    const arr = [...current.children]
    if (Array.isArray(arr)) {
      arr.reverse().forEach((item) => {
        stack.push(item)
      })
    }
  }
  return result
}

function rootFisrtSearch(root) {
  const result = []
  const stack = []
  stack.push(root)
  while (stack.length) {
    const current = stack.pop()
    result.push(current.id)
    const arr = [...current.children]
    if (Array.isArray(arr)) {
      arr.reverse().forEach((item) => {
        stack.push(item)
      })
    }
  }
  return result
}

function leafFisrtSearch(root) {
  const result = []
  const stack = []
  stack.push(root)
  while (stack.length) {
    const current = stack.pop()
    const arr = [...current.children]
    if (Array.isArray(arr) && arr.length !== 0) {
      const curr = {
        id: current.id,
        children: []
      }
      stack.push(curr)
      arr.reverse().forEach((item) => {
        stack.push(item)
      })
    } else {
      result.push(current.id)
    }
  }
  return result
}
