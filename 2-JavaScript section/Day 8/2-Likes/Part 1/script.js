//Part 1
const numberOflikes = document.querySelector(".numberoflikes");
var firsttime = 0;

numberOflikes.innerText = `${firsttime} likes`;

function increaseLikes() {
  firsttime++;
  if (firsttime == 1) {
    numberOflikes.innerText = `${firsttime} like`;
  } else {
    numberOflikes.innerText = `${firsttime} likes`;
  }
}
