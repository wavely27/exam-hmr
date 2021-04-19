Promise._allSettled = function (...pm) {
  let result = []
  let count = 0
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < pm.length; i++) {
      Promise.resolve(pm[i]).then(function (res) {
        result[i] = { status: 'fulfilled', value: res };
        count++
        if (count === pm.length) {
          resolve(result);
        }
      }, function (err) {
        result[i] = { status: 'rejected', value: err };
        count++
        if (count === pm.length) {
          resolve(result);
        }
      })
    }
  })
}