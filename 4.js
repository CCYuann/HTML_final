let hp = [125, 130, 143, 129, 145, 113, 139, 132];
let mp = [10, 80, 50, 30, 70, 90, 20, 60];
let skill = ["糯米攻擊", "凶狠怒瞪", "很強的攻擊", "需要MP的大招"];

let ply1_hp, ply1_mp, ply2_hp, ply2_mp, allhp1, allhp2;
function creat() {
  let name1 = localStorage.getItem("ply1Name");
  let newPic = document.createElement("img");
  newPic.setAttribute("src", name1 + ".png");
  newPic.setAttribute("id", "img-" + 1);
  newPic.setAttribute("class", "picture");
  newPic.setAttribute("style", "left:9%;" + "bottom:20%;" + "z-index:1" + ";");
  document.body.appendChild(newPic);
  let name2 = localStorage.getItem("ply2Name");
  let newPic1 = document.createElement("img");
  newPic1.setAttribute("src", name2 + ".png");
  newPic1.setAttribute("id", "img-" + 1);
  newPic1.setAttribute("class", "picture");
  newPic1.setAttribute("style", "right:10%;" + "top:1%;" + "z-index:1" + ";");
  document.body.appendChild(newPic1);
  ply1_hp = hp[Math.floor(Math.random() * 7)];
  allhp1 = ply1_hp;
  ply1_mp = mp[Math.floor(Math.random() * 7)];
  ply2_hp = hp[Math.floor(Math.random() * 7)];
  allhp2 = ply2_hp;
  ply2_mp = mp[Math.floor(Math.random() * 7)];
  fight();
}
function show1() {
  msg1.innerHTML = "";
  msg2.innerHTML = "";
  let newPic2 = document.createElement("img");
  newPic2.setAttribute("src", "blackback.png");
  newPic2.setAttribute("id", "img-" + 1);
  newPic2.setAttribute(
    "style",
    "min-height: 100%; width: 100%; position: fixed;top: 0;left: 0;bottom: 0;right: 0; z-index:2; opacity: 0.7;"
  );
  let newPic3 = document.createElement("img");
  newPic3.setAttribute("src", "exp+10.png");
  newPic3.setAttribute("id", "img-" + 1);
  newPic3.setAttribute("class", "picture");
  newPic3.setAttribute(
    "style",
    "width:350px;" + "right:45%;" + "top:60%;" + "z-index:4" + ";"
  );
  let newPic1 = document.createElement("img");
  newPic1.setAttribute("src", "victory.png");
  newPic1.setAttribute("id", "img-" + 1);
  newPic1.setAttribute("class", "picture");
  newPic1.setAttribute(
    "style",
    "width:40%;" + "right:31%;" + "top:27%;" + "z-index:3" + ";"
  );

  document.body.appendChild(newPic2);
  document.body.appendChild(newPic3);
  document.body.appendChild(newPic1);
}
function show2() {
  msg1.innerHTML = "";
  msg2.innerHTML = "";
  let newPic2 = document.createElement("img");
  newPic2.setAttribute("src", "blackback.png");
  newPic2.setAttribute("id", "img-" + 1);
  newPic2.setAttribute(
    "style",
    "min-height: 100%; width: 100%; position: fixed;top: 0;left: 0;bottom: 0;right: 0; z-index:2; opacity: 0.7;"
  );
  let newPic3 = document.createElement("img");
  newPic3.setAttribute("src", "exp-5.png");
  newPic3.setAttribute("id", "img-" + 1);
  newPic3.setAttribute("class", "picture");
  newPic3.setAttribute(
    "style",
    "width:350px;" + "right:45%;" + "top:60%;" + "z-index:4" + ";"
  );
  let n;
  let newPic1 = document.createElement("img");
  newPic1.setAttribute("src", "lose.png");
  newPic1.setAttribute("id", "img-" + 1);
  newPic1.setAttribute("class", "picture");
  newPic1.setAttribute(
    "style",
    "width:50%;" + "right:25%;" + "top:3%;" + "z-index:3" + ";"
  );
  document.body.appendChild(newPic3);
  document.body.appendChild(newPic2);
  document.body.appendChild(newPic1);
}
function fight() {
  let op = 0;
  var t = setInterval(function () {
    let tmp1, tmp2;
    let name1 = localStorage.getItem("ply1Name");
    let name2 = localStorage.getItem("ply2Name");
    if (op == 0) {
      tmp1 = Math.floor(Math.random() * 3);
      tmp2 = Math.floor(Math.random() * 3);
      if (ply1_mp == 100) {
        ply1_mp = 0;
        tmp1 = 3;
      }
      if (ply2_mp == 100) {
        ply2_mp = 0;
        tmp2 = 3;
      }
      let demage1 = Math.floor(Math.random() * 5) + (tmp1 + 1) * 5;
      console.log(demage1);
      de2.innerHTML = "<h3>-" + demage1 + "</h3>";
      msg1.innerHTML =
        '<h1 class="sec">' +
        name1 +
        "使用了<span>" +
        skill[tmp1] +
        "</span></h1>";
      ply2_hp -= demage1;

      let ratio = (300 * ply2_hp) / allhp2;
      let bleed2 = document.getElementById("bleed2");
      bleed2.innerHTML = ply2_hp + "/" + allhp2;
      if (ratio < 0) {
        bleed2.setAttribute(
          "style",
          "background: #ff0404; width:0px; height: 20px"
        );
      } else {
        bleed2.setAttribute(
          "style",
          "background: #ff0404; width: " + ratio + "px; height: 20px"
        );
      }
      if (ply2_hp <= 0) {
        op = 1;
        show1();
      }
    }
    if (op == 0) {
      let demage2 = Math.floor(Math.random() * 5) + (tmp2 + 1) * 5;
      console.log(demage2);
      de1.innerHTML = "<h3>-" + demage2 + "</h3>";
      msg2.innerHTML =
        '<h1 class="sec">' +
        name2 +
        "使用了<span>" +
        skill[tmp2] +
        "</span></h1>";
      ply1_hp -= demage2;
      ratio = (300 * ply1_hp) / allhp2;
      let bleed1 = document.getElementById("bleed1");
      bleed1.innerHTML = ply1_hp + "/" + allhp1;
      if (ratio < 0) {
        bleed1.setAttribute(
          "style",
          "background: #ff0404; width:0px; height: 20px"
        );
      } else {
        bleed1.setAttribute(
          "style",
          "background: #ff0404; width: " + ratio + "px; height: 20px"
        );
      }

      ply2_mp += 10;
      if (ply1_hp <= 0) {
        op = 1;
        show2();
      }
    }
  }, 1500);
}
function start() {
  creat();
}
window.addEventListener("load", start, false);
