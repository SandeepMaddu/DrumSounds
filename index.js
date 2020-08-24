for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

document.addEventListener("keypress", handleKeyStroke);

function handleClick(event) {
  console.log(event);
  play_sounds(this.innerHTML);
  animate(this.innerHTML);
}

function handleKeyStroke(event) {
  play_sounds(event.key);
  animate(event.key);
}

function play_sounds(i) {
  if (i === "w") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  if (i === "a") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
  if (i === "s") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
  if (i === "d") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  if (i === "j") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  if (i === "k") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  if (i === "l") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
}

function animate(key) {
  var target = "." + key;
  document.querySelector(target).classList.add("pressed");
  setTimeout(function () {
    document.querySelector(target).classList.remove("pressed");
  }, 100);
}
