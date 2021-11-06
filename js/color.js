let mybox = document.querySelector("#mybox");
let myhint1 = document.querySelector("#myhint1");
let myhint2 = document.querySelector("#myhint2");

let timerid;

// listener

mybox.addEventListener("click", click1);
mybox.addEventListener('dblclick', click2);

// click

function click1(e) {

  if (e.detail === 1) {

    timerid = setTimeout(setColor, 400);
  }
}

function click2(e) {

  if (e.detail === 2) {

    tellColor();

    clearTimeout(timerid);
  }
}

// implement

function setColor() {

  let col1 = colorize();
  let col2 = colorize();

  changeColors(col1, col2);

  window.localStorage.setItem("mycolor1", col1);
  window.localStorage.setItem("mycolor2", col2);

  logize("color: " + col1 + "\nbackground-color: " + col2);
}

function tellColor() {

  let col1 = window.localStorage.getItem("mycolor1");
  let col2 = window.localStorage.getItem("mycolor2");

  headize("color: " + col1 + "\nbackground-color: " + col2);
}

function bootColor() {

  let col1 = window.localStorage.getItem("mycolor1");
  let col2 = window.localStorage.getItem("mycolor2");

  changeColors(col1, col2);
}

function changeColors(col1, col2) {

  mybox.style.color = col1;
  mybox.style.backgroundColor = col2;

  myhint1.style.color = col2;
  myhint1.style.backgroundColor = col1;

  myhint2.style.color = col2;
  myhint2.style.backgroundColor = col1;
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
