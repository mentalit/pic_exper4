// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

if (video) {
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        video.srcObject = stream
    })
}

if (snapButton) {
    snapButton.onclick = function () {

    // snip!

      canvas.getContext('2d').drawImage(video, 0, 0)

      var dataUrl = canvas.toDataURL('image/jpeg')

      document.getElementById("shot").src = dataUrl

      hiddenPlayerPicture.value = dataUrl

    // snip!

    }
  }
