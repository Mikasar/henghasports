function cameraTakePicture () {
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
  })
  function onSuccess (imageURL) {
    var image = document.getElementById('myImage')
    image.src = imageURL
    alert(imageURL)
  }
  function onFail (message) {
    alert('Failed because: ' + message)
  }
}
export {
  cameraTakePicture
}
