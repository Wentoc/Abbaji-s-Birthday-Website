window.addEventListener('DOMContentLoaded', (event)=>{
    const audio = new Audio('./music/wish-song.mp3');
    // audio.volume = 100;
    audio.play();
});

var images = [
  "./images/a1.jpg",
  "./images/a2.jpg",
  "./images/am1.jpg",
  "./images/familypic.jpeg",
  "./images/f1.jpg",
  "./images/home2.jpg",
  "./images/hbb1.jpg",
  "./images/hbb2.png",
  "./images/hbb4.jpg",
];

var i = 0;

function slides() {
   document.getElementById("slideimage").src = images[i];

   (i < (images.length - 1)) ? i++ : i=0; // Ternary operator

}

setInterval(slides, 2000);

// Typing Animation
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  // var css = document.createElement("style");
  // css.type = "text/css";
  // css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  // document.body.appendChild(css);
};

// textFit(document.querySelector('.w1h1'))




