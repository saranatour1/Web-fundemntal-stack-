var nameEl = document.querySelector("h3");
var toddE = document.querySelector("#contact1");
var philK = document.querySelector("#contact2");
var countEl = document.querySelector(".connections-number");
var connectionEl = document.querySelector(".connections-number1");

var count = 2;
var connections = 200;
var decrease = false;
var increase = false;
function changeName() {
  nameEl.innerText = "Khalid";
}



function accept() {
  decreaseRequests();
  return (decrease = true);
}

// function accept() {
//   count--;
//   toddE.remove();
//   countEl.innerText = count;
//   // philK.remove();
// }
// function accept1() {
//   count--;
//   philK.remove();
//   countEl.innerText = count;
// }

function decreaseRequests() {
  if (decrease == true) {
    count--;
    countEl.innerText = count;
  }
}
