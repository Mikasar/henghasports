export function merge (lesson) {
  var len = lesson.length
  var result = []
  if (len < 2) {
    return lesson
  } else {
    for (var i = 0; i < len; i++) {
      if (lesson[i + 1]) {
        // console.log(arr[i])
        var arr1 = lesson[i].split('-')
        var arr2 = lesson[i + 1].split('-')
        var index = lesson.indexOf(lesson[i])
        if (arr1[1] === arr2[0]) {
          lesson.splice(index, 2, arr1[0] + '-' + arr2[1])
          result = lesson
          merge(result)
          // console.log(result)
        } else {
          result = lesson
        }
      } else {
      // console.log('i + 1 > len')
      }
    }
    return result
  }
}
