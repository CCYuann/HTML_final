let ply1 = "",
  ply2 = "";
function clk1() {
  let s = document.getElementById("s1");
  if (ply1 == "") {
    ply1 = "pikachu";
    var img = document.querySelector(".img1");
    img.style = "box-sizing: border-box;border: 5px red solid;";
    localStorage.setItem("ply1Name", ply1);
  } else {
    ply2 = "pikachu";
    var img = document.querySelector(".img1");
    img.style = "box-sizing: border-box;border: 5px blue solid;";
    localStorage.setItem("ply2Name", ply2);
  }
  s.play();
}
function clk2() {
  let s = document.getElementById("s2");
  if (ply1 == "") {
    ply1 = "Charmander";
    var img = document.querySelector(".img2");
    img.style = "box-sizing: border-box;border: 5px red solid;";
    localStorage.setItem("ply1Name", ply1);
  } else {
    ply2 = "Charmander";
    var img = document.querySelector(".img2");
    img.style = "box-sizing: border-box;border: 5px blue solid;";
    localStorage.setItem("ply2Name", ply2);
  }
  s.play();
}
function clk3() {
  let s = document.getElementById("s3");
  if (ply1 == "") {
    ply1 = "squirtle";
    var img = document.querySelector(".img3");
    img.style = "box-sizing: border-box;border: 5px red solid;";
    localStorage.setItem("ply1Name", ply1);
  } else {
    ply2 = "squirtle";
    var img = document.querySelector(".img3");
    img.style = "box-sizing: border-box;border: 5px blue solid;";
    localStorage.setItem("ply2Name", ply2);
  }
  s.play();
}
function clk4() {
  let s = document.getElementById("s4");
  if (ply1 == "") {
    ply1 = "bulbasaur";
    var img = document.querySelector(".img4");
    img.style = "box-sizing: border-box;border: 5px red solid;";
    localStorage.setItem("ply1Name", ply1);
  } else {
    ply2 = "bulbasaur";
    var img = document.querySelector(".img4");
    img.style = "box-sizing: border-box;border: 5px blue solid;";
    localStorage.setItem("ply2Name", ply2);
  }
  s.play();
}
function clk5() {
  let s = document.getElementById("s5");
  if (ply1 == "") {
    ply1 = "mewtwo";
    var img = document.querySelector(".img5");
    img.style = "box-sizing: border-box;border: 5px red solid;";
    localStorage.setItem("ply1Name", ply1);
  } else {
    ply2 = "mewtwo";
    var img = document.querySelector(".img5");
    img.style = "box-sizing: border-box;border: 5px blue solid;";
    localStorage.setItem("ply2Name", ply2);
  }
  s.play();
}
function clk6() {
  let s = document.getElementById("s6");
  if (ply1 == "") {
    ply1 = "rayquaza";
    var img = document.querySelector(".img6");
    img.style = "box-sizing: border-box;border: 5px red solid;";
    localStorage.setItem("ply1Name", ply1);
  } else {
    ply2 = "rayquaza";
    var img = document.querySelector(".img6");
    img.style = "box-sizing: border-box;border: 5px blue solid;";
    localStorage.setItem("ply2Name", ply2);
  }
  s.play();
}
function clk7() {
  let s = document.getElementById("s7");
  if (ply1 == "") {
    ply1 = "lucario";
    var img = document.querySelector(".img7");
    img.style = "box-sizing: border-box;border: 5px red solid;";
    localStorage.setItem("ply1Name", ply1);
  } else {
    ply2 = "lucario";
    var img = document.querySelector(".img7");
    img.style = "box-sizing: border-box;border: 5px blue solid;";
    localStorage.setItem("ply2Name", ply2);
  }
  s.play();
}
function clk8() {
  let s = document.getElementById("s8");
  if (ply1 == "") {
    ply1 = "snorlax";
    var img = document.querySelector(".img8");
    img.style = "box-sizing: border-box;border: 5px red solid;";
    localStorage.setItem("ply1Name", ply1);
  } else {
    ply2 = "snorlax";
    var img = document.querySelector(".img8");
    img.style = "box-sizing: border-box;border: 5px blue solid;";
    localStorage.setItem("ply2Name", ply2);
  }
  s.play();
}
function re() {
  localStorage.removeItem("ply2Name");
  localStorage.removeItem("ply1Name");
  ply1 = "";
  ply2 = "";
}
function start() {
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  let img3 = document.getElementById("img3");
  let img4 = document.getElementById("img4");
  let img5 = document.getElementById("img5");
  let img6 = document.getElementById("img6");
  let img7 = document.getElementById("img7");
  let img8 = document.getElementById("img8");
  let reset = document.getElementById("reset");
  reset.addEventListener("click", re, false);
  img1.addEventListener("click", clk1, false);
  img2.addEventListener("click", clk2, false);
  img3.addEventListener("click", clk3, false);
  img4.addEventListener("click", clk4, false);
  img5.addEventListener("click", clk5, false);
  img6.addEventListener("click", clk6, false);
  img7.addEventListener("click", clk7, false);
  img8.addEventListener("click", clk8, false);
}
window.addEventListener("load", start, false);
