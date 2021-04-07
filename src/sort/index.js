import bubbleSort from './bubbleSort'
import selectionSort from './selectionSort'
import insertionSort from './InsertionSort'
import quickSort from './quickSort'

const ratio = 1
const source = Array.from({ length: 20 * ratio }).map(
  () => Math.floor(Math.random() * 100 * ratio) // 0 | ~~
)

function handleBubble() {
  let startTime

  startTime = Date.now()
  const result = bubbleSort.bubbleSort(source)
  const diff = Date.now() - startTime

  startTime = Date.now()
  const result1 = bubbleSort.bubbleSortPoint(source)
  const diff1 = Date.now() - startTime

  startTime = Date.now()
  const result2 = bubbleSort.bubbleSortClose(source)
  const diff2 = Date.now() - startTime

  console.log('普通冒泡', diff)
  console.log('result', result)

  console.log('标记冒泡', diff1)
  console.log('result1', result1)

  console.log('双向冒泡', diff2)
  console.log('result2', result2)
}

function handleSelection() {
  let startTime

  startTime = Date.now()
  const result = selectionSort.selectionSort(source)
  const diff = Date.now() - startTime

  console.log('选择冒泡', diff)
  console.log('result', result)
}

function handleInsert() {
  let startTime

  startTime = Date.now()
  const result = insertionSort.insertionSort(source)
  const diff = Date.now() - startTime

  startTime = Date.now()
  const result1 = insertionSort.binaryInsertionSort(source)
  const diff1 = Date.now() - startTime

  console.log('插入排序', diff)
  console.log('result', result)

  console.log('二分插入排序', diff1)
  console.log('result1', result1)
}

function handleQuick() {
  let startTime

  startTime = Date.now()
  const result = quickSort.quickSort(source)
  const diff = Date.now() - startTime

  console.log('插入排序', diff)
  console.log('result', result)
}

console.log('source', source)
setTimeout(handleQuick, 3000)
