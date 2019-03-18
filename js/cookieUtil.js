export function setCookie (key, value) {
  var exdate = new Date()
  exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000)
  window.document.cookie = key + '=' + value + ';path=/;expires=' + exdate.toGMTString()
}

export function getCookie (param) {
  var cParam = ''
  if (document.cookie.length > 0) {
    var arr = document.cookie.split('; ')
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=')
      if (arr2[0] === param) {
        cParam = arr2[1]
      }
    }
    return cParam
  }
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}
