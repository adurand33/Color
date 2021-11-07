// variables

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

    timerid = setTimeout(() => { ccount = 0; renewColor(); }, 400);
  }
  else if (ccount == 2) {

    ccount = 0;

    clearTimeout(timerid);

    proposeColor();
  }
};

// one click

function renewColor() {

  myinfo1.textContent = myinfo2.textContent = "";

  col1 = colorize();
  col2 = colorize();

  changeColors(col1, col2);

  window.localStorage.setItem("mycolor1", col1);
  window.localStorage.setItem("mycolor2", col2);

  logize(getInfo(col1, col2));
}

// double click

function proposeColor() {

  col1 = window.localStorage.getItem("mycolor1");
  col2 = window.localStorage.getItem("mycolor2");

  let info = getInfo(col1, col2);

  let ind = info.indexOf('\n');

  myinfo1.textContent = info.slice(0, ind);
  myinfo2.textContent = info.slice(ind, info.length)

  navigator.clipboard.writeText(info);

//headize(info); // provoke an error
}

function getInfo(col1, col2) {

  myinfo1.textContent = myinfo2.textContent = "";

  return "color: " + col1 + ";\nbackground-color: " + col2 + ";";
}

function bootColor() {

  col1 = window.localStorage.getItem("mycolor1");
  col2 = window.localStorage.getItem("mycolor2");

  changeColors(col1, col2);

  logize(getInfo(col1, col2));
}

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

// colorize

function colorize() {

  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

// headize

function headize(message) {

  window.alert(message);
}

// logize

function logize(message) {

  console.log(message);
}
