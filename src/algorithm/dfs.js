// recursion
// function deepTraversal(node, nodelist) {
//   if (node) {
//     nodelist.push(node)
//     let children = node.children;
//     for (let i = 0; i < children.length; i++) {
//       deepTraversal(children[i], nodelist)
//     }
//   }
//   return nodelist;
// }

function deepTraversal(node) {
  let nodeList = []
  let stack = []
  if (node) {
    stack.push(node)
    while (stack.length) {
      let child = stack.pop()
      console.log(child, ' <=== child');
      nodeList.push(child)
      let children = child.children
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return nodeList
}

const root = {
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
              children: []
            },
            {
              id: 8,
              children: [
                {
                  id: 9,
                  children: []
                }
              ]
            },
          ]
        },
        {
          id: 2,
          children: []
        },
      ]
    },
    {
      id: 6,
      children: [
        {
          id: 10,
          children: []
        }
      ]
    },
    {
      id: 7,
      children: []
    },
  ]
}

const res = deepTraversal(root)
console.log(res, ' <=== res');
