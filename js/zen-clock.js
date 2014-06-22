setInterval(function() {
  var d = new Date();
  var t = d.getTime().toString();

  var hour = ('0' + d.getHours()).slice(-2);
  var min  = ('0' + d.getMinutes()).slice(-2);
  var sec  = ('0' + d.getSeconds()).slice(-2);

  var r = Math.ceil(hour * 10.64);
  var g = Math.ceil(min * 4.25);
  var b = Math.ceil(sec * 4.25);

  document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
}, 1000);

bgAudio = new Audio('./audio/loop.mp3'); 
bgAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
bgAudio.play();

document.body.addEventListener("click", function(e) {
  if(bgAudio.paused) {
    bgAudio.play();        
  } else {
    bgAudio.pause();        
  }
});

setTimeout(function() {
  document.getElementById("instructions").style.opacity = 0;
}, 3000);

setTimeout(function() {
  document.getElementById("time").style.opacity = 0.5;
}, 1000);
