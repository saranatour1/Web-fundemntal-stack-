// (32°F − 32) × 5/9 = 0°C
var cookie = document.querySelector(".cookies");
// Function to alert that the city has been clicked
function alertOfname(city) {
  alert(
    `You have clicked on the city of ${city.innerText} ,Loading Weather report`
  );
  console.log(city.innerText);
}

function removeVisibilaty() {
  cookie.style.visibility = "hidden";
}
setTimeout(() => {
  cookie.style.visibility = "visible";
}, 1000);

function changeTemperature(elem) {
  var tempVal = document.querySelectorAll(".temp");
  if (elem.value == "F") {
    tempVal.forEach((element) => {
      var val = element.innerText;
      element.innerText = Math.round(val * (9 / 5) + 32);
    });
  } else if (elem.value == "C") {
    tempVal.forEach((element) => {
      var val2 = element.innerText;
      element.innerText = Math.round(((val2 - 32) * 5) / 9);
    });
  }
}
