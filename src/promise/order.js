Promise.order = function (arr) {
  return new Promise(function (resolve, reject) {
    let result = []
    dispatch(0)
    function dispatch(i) {
      let p = arr[i]
      if (p) {
        Promise.resolve(p()).then(function (res) {
          console.log(res, ' <=== res');
          result.push(res)
          dispatch(i + 1)
        }, function (err) {
          reject(err)
        })
      } else {
        resolve(result)
      }
    }
  })
}
let ipt = [
  function p1() {
    return new Promise(resolve => {
      setTimeout(function () {
        console.log(1, ' <=== 1');
        resolve(1)
      }, 4000)
    })
  },
  function p2() {
    return new Promise(resolve => {
      setTimeout(function () {
        console.log(2, ' <=== 2');
        resolve(2)
      }, 2000)
    })
  },
  function p3() {
    return new Promise(resolve => {
      setTimeout(function () {
        console.log(3, ' <=== 3');
        resolve(3)
      }, 1000)
    })
  },
  function p4() {
    return new Promise(resolve => {
      setTimeout(function () {
        console.log(4, ' <=== 4');
        resolve(4)
      }, 3000)
    })
  }
]
Promise.order(ipt).then(function (res) {
  console.log(res, ' <=== res');
}, function (err) {
  console.log(err, ' <=== err');
})