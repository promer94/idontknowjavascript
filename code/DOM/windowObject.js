// Window method / object / properties

// Alert
alert('hello');

//Prompt

const input = prompt();
alert(input);

//Confirm
if (confirm('Are you sure')) {
  console.log('yes');
} else {
  console.log('no');
}

//Outter height and width
let val = window.outerHeight;
val = window.outerWidth;
//Inner height and width
val = window.innerHeight;
val = window.innerWidth;

//Scroll points
window.scrollY;
window.scrollX;

//Location Object

val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//History Object
window.history;

//Navigator Object
val = window.navigator;
val = window.navigator.appName;
