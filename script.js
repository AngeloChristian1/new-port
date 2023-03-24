const toggle = document.getElementById("toggleDark");
const body = document.getElementById("container");

toggle.addEventListener("click", function () {
  toggle.src = "./img/sun-on.svg";
  //   this.classList.toggle('img = "scr./img/sun-off"');
  if (toggle == "toggleDark") {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "1s";
  } else {
    body.style.background = "grey";
    body.style.color = "black";
    body.style.transition = "1s";
  }
});
