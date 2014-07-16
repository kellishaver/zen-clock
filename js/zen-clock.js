var setSeconds = false;
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
  document.getElementById("second").style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
  document.getElementById("time").innerHTML = hour + ":" + min;


  if(d.getSeconds() == 1 && setSeconds == false) {
    var sh = document.getElementById("second");
    sh.style.webkitAnimationName = "spin";
    setSeconds = true;

    setTimeout(function() {
      document.getElementById("second").style.opacity = 1;
    }, 1000);
  }
}, 1000);

setTimeout(function() {
  document.getElementById("instructions").style.opacity = 0;
}, 3000);

setTimeout(function() {
  document.getElementById("time").style.opacity = 0.5;
  document.getElementById("track").style.opacity = 0.3;
}, 1000);

bgAudio = new Audio('./audio/loop.mp3'); 
bgAudio.volume = 0;

bgAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

//bgAudio.play();
//fadeIn();

function fadeIn() {
  setTimeout(function() {
    if((bgAudio.volume + 0.01) <= 1) {
      bgAudio.volume += 0.01;
      fadeIn();
    } else {
      bgAudio.volume = 1;
    }
  }, 20);
}

function fadeOut() {
  setTimeout(function() {
    if((bgAudio.volume - 0.01) > 0) {
      bgAudio.volume -= 0.01;
      fadeOut();
    } else {
      bgAudio.volume = 0;
    }
  }, 20);
}

document.getElementById("time").addEventListener("click", function(e) {
  if(bgAudio.paused) {
    bgAudio.play();
    fadeIn();
  }
  (bgAudio.volume > 0) ? fadeOut() : fadeIn();
});
document.getElementById("time").addEventListener("mouseover", function(e) {
  document.getElementById("credit").style.opacity = 0.5;
});
document.getElementById("time").addEventListener("mouseout", function(e) {
  document.getElementById("credit").style.opacity = 0;
});
document.getElementById("credit").addEventListener("mouseover", function(e) {
  document.getElementById("credit").style.opacity = 0.5;
});
document.getElementById("credit").addEventListener("mouseout", function(e) {
  document.getElementById("credit").style.opacity = 0;
});
