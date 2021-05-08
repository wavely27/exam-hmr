// 02
// promise
// .all
// .race
// order
// .one

console.log('_p ===> ');

// fn this status resolve reject .then 链式调用 
function _Promise(executor) {
  let _this = this
  _this.$$status = 'pending';
  _this.successCallback = undefined
  _this.failCallBack = undefined
  _this.error = undefined
  executor(resolve.bind(this), reject.bind(this))
  function resolve(params) {
    if (_this.$$status === 'pending') {
      _this.$$status = 'full'
      _this.successCallback(params)
    }
  }
  function reject(params) {
    if (_this.$$status === 'pending') {
      _this.$$status = 'fail'
      _this.failCallBack(params)
    }
  }
}

_Promise.prototype.then = function (full, fail) {
  this.successCallback = full
  this.failCallBack = fail
};

const p = new _Promise(function (res, rej) {
  setTimeout(_ => res('成功'), 30)
})

p.then(res => console.log(res))

// allSettled
if (!Promise.allSettled) {
  const rejectHandler = reason => ({ status: 'rejected', reason });
  const resolveHandler = value => ({ status: 'fulfilled', value });
  Promise.allSettled = function (promises) {
    const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
    return Promise.all(convertedPromises);
  };
}

class Promise {
  constructor(fn) {
    this.status = 'pending';
    this.resolve = undefined;
    this.reject = undefined;
    let resolve = value => {
      if (this.status === 'pending') {
        this.status = 'resovled'
        this.resolve = value
      }
    }
    let reject = value => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reject = value
      }
    }
    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  then(onResolved, onRejected) {
    switch (this.status) {
      case 'resolved': onResolved(this.resolve); break;
      case 'rejected': onRejected(this.reject); break;
    }
  }
}