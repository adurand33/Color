// variables

let mybody = document.querySelector("#mybody");
let mybox = document.querySelector("#mybox");
let myhint1 = document.querySelector("#myhint1");
let myhint2 = document.querySelector("#myhint2");
let myinfo1 = document.querySelector("#myinfo1");
let myinfo2 = document.querySelector("#myinfo2");

let timerid;
let col1;
let col2;

// listener

mybox.addEventListener("click", click);

// event

let ccount = 0;

function click(e) {

  let myid = e.target.id;

  if (myid == "myinfo1" || myid == "myinfo2") return;

  ccount++;

  if (ccount == 1) {

    timerid = setTimeout(() => { ccount = 0; gradeColors(false); localStorage.setItem("grade", "off"); renewColors(); }, 300);
  }
  else if (ccount == 2) {

    let grade = (localStorage.getItem("grade") != null) ? localStorage.getItem("grade") : "on";

    ccount = 0;

    clearTimeout(timerid);

    proposeColors();

    gradeColors(grade == "on");

    grade = grade == "on" ? "off" : "on";

    localStorage.setItem("grade", grade);
  }
};

// 1-click -> renew colors

function renewColors(silent = false) {

  myinfo1.textContent = myinfo2.textContent = "";

  col1 = colorize();
  col2 = colorize();

  changeColors(col1, col2);

  localStorage.setItem("mycolor1", col1);
  localStorage.setItem("mycolor2", col2);

  if (silent) {

    logize(makeInfo(col1, col2));
  }
}

// 2-click -> propose colors

function proposeColors() {

  col1 = localStorage.getItem("mycolor1");
  col2 = localStorage.getItem("mycolor2");

  let info = makeInfo(col1, col2);

  let ind = info.indexOf('\n');

  myinfo1.textContent = info.slice(0, ind);
  myinfo2.textContent = info.slice(ind, info.length)

  navigator.clipboard.writeText(info);

//headize(info); // provoke [Violation] 'click' handler took 2024ms
}

// make info

function makeInfo(col1, col2) {

  myinfo1.textContent = myinfo2.textContent = "";

  return "color: " + col1 + ";\nbackground-color: " + col2 + ";";
}

// change colors

function changeColors(col1, col2) {

  mybox.style.color = col1;
  mybox.style.backgroundColor = col2;

  myhint1.style.color = col2;
  myhint1.style.backgroundColor = col1;

  myhint2.style.color = col2;
  myhint2.style.backgroundColor = col1;

  myinfo1.style.color = col1;
  myinfo2.style.color = col2;
}

// grade colors

function gradeColors(grade) {

  col1 = grade ? localStorage.getItem("mycolor1") : "white";
  col2 = grade ? localStorage.getItem("mycolor2") : "white";

  mybody.style.background = "linear-gradient(" + col1 + "," + col2 + ")";
}

// boot colors

function bootColors() {

  if (localStorage.getItem("mycolor1") != null && localStorage.getItem("mycolor2") != null) {

    col1 = localStorage.getItem("mycolor1");
    col2 = localStorage.getItem("mycolor2");
  }
  else {

    renewColors(true);
  }

  changeColors(col1, col2);

  logize(makeInfo(col1, col2));
}

// colorize

function colorize() {

  return '#' + Math.random().toString(16).slice(-6);
}

// headize

function headize(message) {

  alert(message);
}

// logize

function logize(message) {

  console.log(message);
}
