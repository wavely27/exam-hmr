function compose(args) {
  return function () {
    const ctx = {
      point: 0,
      args: [...args],
      next: function () {
        this.dispatch(++this.point)
      },
      dispatch: function (index) {
        const fn = this.args[index]
        fn && fn(ctx)
      }
    }
    ctx.dispatch(0)
    return ctx
  }
}

const allFn = compose([a, b, c])

function a(ctx) {
  console.log(1, ' <=== 1');
  ctx.next()
  console.log(11, ' <=== 11');
}
function b(ctx) {
  console.log(2, ' <=== 2');
  ctx.next()
  console.log(22, ' <=== 22');
}
function c(ctx) {
  console.log(3, ' <=== 3');
  ctx.next()
  console.log(33, ' <=== 33');
}

allFn()