Promise._race = function (...pm) {
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < pm.length; i++) {
      Promise.resolve(pm[i]).then(function (res) {
        return resolve(res)
      }, function (err) {
        return reject(errs)
      })
    }
  })
}