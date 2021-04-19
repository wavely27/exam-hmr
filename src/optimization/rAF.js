const el = document.createElement('div')
el.style.width = '100px'
el.style.height = '100px'
el.style['background-color'] = 'red'
document.body.appendChild(el)
// let start
let i = 0
function move(timestamp) {
  el.style.transform = 'translateX(' + (i) + 'px)';
  if (i < 200) {
    i++
    window.requestAnimationFrame(move);
  }
}
window.requestAnimationFrame(move)