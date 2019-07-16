var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia || navigator.ogetUserMedia || navigator.msGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia({video:true}, streamWebCam, throwError);
}

function streamWebCam(stream) {
  video.srcObject=stream;
  video.play();
}

function throwError (e) {
  alert(e.name);
}

function snap() {
  canvas.width = video.clientWidth;
  canvas.height = video.clientHeight;
  context.drawImage(video, 0, 0, 300, 200);
}

function exploreMore() {
  window.open( "https://github.com/saarhaber" );
  alert('Hire Me!');
}
