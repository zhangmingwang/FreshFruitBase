function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function getOriginalImageSize(e) {
  var imageSize = {};
  var originalWidth = e.detail.width;//图片原始宽 
  var originalHeight = e.detail.height;//图片原始高 
  var originalScale = originalHeight / originalWidth;//图片高宽比 
  imageSize.imageHeight = originalHeight;
  imageSize.imageWidth = originalWidth;
  console.log('detail: ' + e.dedail)
  console.log('originalWidth: ' + originalWidth)
  console.log('originalHeight: ' + originalHeight)
  return imageSize;
}

module.exports = {
  formatTime: formatTime,
  getOriginalImageSize: getOriginalImageSize
}


