Promise._all = function (...pm) {
  let len = pm.length
  let result = Array.from({ length: len })
  let count = 0
  return new Promise(function (resolve, reject) {
    for (let i = 0; pm[i]; i++) {
      Promise.resolve(pm[i]).then(function (res) {
        result[i] = res
        count++;
        if (count === len) {
          return resolve(res)
        }
      }, function (err) {
        return reject(err)
      })
    }
  })
}