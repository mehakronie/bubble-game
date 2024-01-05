var timer = 60;
var rn = 0;
score = 0;
var pbtm = document.querySelector("#pbtm");
var hiting = document.querySelector("#hitval");
var scoring = document.querySelector("#scoreval");

function makebubble() {
  if (timer > 0) {
    var clutter = "";

    for (let i = 0; i < 168; i++) {
      var num = Math.floor(Math.random() * 20);
      clutter += `<div id="bubble"><h4>${num}</h4></div>`;
    }
    pbtm.innerHTML = clutter;
  } else if (timer == 0) {
    pbtm.textContent = `GAME OVER /SCORE = ${realscore()}`;
    hiting.textContent = 0;
    scoring.textContent = 0;
    pbtm.removeEventListener;
  }
}

function time() {
  var interval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeval").textContent = timer;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

function hit() {
  rn = Math.floor(Math.random() * 20);
  hiting.textContent = rn;
}

function scoreval() {
  score += 10;
  scoring.textContent = score;
  scoring.style.color = "green";
}
function scorevalreduce() {
  score -= 10;
  scoring.textContent = score;
  scoring.style.color = "red";
}
function realscore() {
  if (timer == 0) {
    return score;
  }
}

pbtm.addEventListener("click", function (dets) {
  var selectednum = Number(dets.target.textContent);
  if (selectednum == rn) {
    scoreval();
    hit();
    makebubble();
  } else {
    scorevalreduce();
    hit();
    makebubble();
  }
});

hit();
time();
makebubble();
