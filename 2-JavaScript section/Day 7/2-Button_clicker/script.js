//Loging button from login to logout

function changeText(element) {
  if (element.innerText == "Login") {
    element.innerText = "Logout";
  } else {
    element.innerText = "Login";
  }
}
function removeButton(element) {
  element.remove();
}

function countLikes(element) {
  alert("ninja was liked");
}
