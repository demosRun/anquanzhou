// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

setTimeout(function () {
  autoScale({
    // 设计宽度
    deviseW: 750,
    // 设计高度
    deviseH: 1508,
    center: 'top'
  })
}, 100);