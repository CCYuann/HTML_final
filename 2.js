function start() {
  let girl = document.getElementById("girl");
  let boy = document.getElementById("boy");
  girl.addEventListener("click", chg1, false);
  boy.addEventListener("click", chg2, false);
}
function chg1() {
  document.getElementById("girl").style.border = "5px #ffac55 solid";
  document.getElementById("boy").style.border = "";
}
function chg2() {
  document.getElementById("boy").style.border = "5px #ffac55 solid";
  document.getElementById("girl").style.border = "";
}

window.addEventListener("load", start, false);
