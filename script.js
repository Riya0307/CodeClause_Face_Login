            
        navigator.getUserMedia = ( navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);

var video;
var webcamStream;
if (navigator.getUserMedia) {
navigator.getUserMedia (


{
video: true,
audio: false
},


function(localMediaStream) {
 video = document.querySelector('video');
video.srcObject = localMediaStream;
webcamStream = localMediaStream;
},


function(err) {
console.log("The following error occured: " + err);
}
);
} else {
console.log("getUserMedia not supported");
}  



var canvas, ctx;

function init() {

mcanvas = document.getElementById("myCanvas");
ctx = mcanvas.getContext('2d');
}

function video(){

ctx.drawImage(video,0,0,mcanvas.width,mcanvas.height);
var dataURL = mcanvas.toDataURL('image/png');
document.getElementById("current_image").value=dataURL;

}