function wideTraversal(node) {
  let nodeList = []
  if (node) {
    let queue = []
    queue.unshift(node)
    while(queue.length) {
      const child = queue.shift()
      nodeList.push(child)
      const children = child.children
      for(let i=0; i < children.length; i++) {
        queue.push(children[i])
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

const res = wideTraversal(root)
console.log(res, ' <=== res');
