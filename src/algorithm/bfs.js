// 广度优先遍历 BFS

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

const res = breadthFirstSearch(root)
console.log(res, ' <=== res')

function breadthFirstSearch(root) {
  const result = []
  const stack = []
  stack.push(root)
  while (stack.length) {
    const current = stack.shift()
    result.push(current.id)
    const { children } = current
    children.forEach((item) => {
      stack.push(item)
    })
  }
  return result
}
