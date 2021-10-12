let mybox = document.querySelector("#mybox");

let timerid;

// listener

mybox.addEventListener("click", click1);
mybox.addEventListener('dblclick', click2);

// click

function click1(e) {

  if (e.detail === 1) {

    timerid = setTimeout(setColor, 300);
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

  var col1 = colorize();
  var col2 = colorize();

  mybox.style.color = col1;
  mybox.style.backgroundColor = col2;

  window.localStorage.setItem("mycolor1", col1);
  window.localStorage.setItem("mycolor2", col2);

  logize("front-col: " + col1 + ", back-col: " + col2);
}

function tellColor() {

  var col1 = window.localStorage.getItem("mycolor1");
  var col2 = window.localStorage.getItem("mycolor2");

  headize("front-col: " + col1 + ", back-col: " + col2);
}

function bootColor() {

  var col1 = window.localStorage.getItem("mycolor1");
  var col2 = window.localStorage.getItem("mycolor2");

  mybox.style.color = col1;
  mybox.style.backgroundColor = col2;
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
