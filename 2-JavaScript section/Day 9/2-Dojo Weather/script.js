// (32°F − 32) × 5/9 = 0°C
var cookie = document.querySelector(".cookies");
// Function to alert that the city has been clicked
function alertOfname(city) {
	alert(`You have clicked on the city of ${city.innerText} ,Loading Weather report`);
	console.log(city.innerText);
}

function removeVisibilaty() {
	cookie.style.visibility = "hidden";
}
setTimeout(() => {
	cookie.style.visibility = "visible";
}, 1000);

function changeTemperature(elem, tempVal) {
	var tempVal = document.querySelectorAll(".temp");
	for(var i = 0; i < tempVal.length; i++) {
		if(elem.value == "F") {
			var val = tempVal[i].innerText;
			tempVal[i].innerText = Math.round(val * (9 / 5) + 32);
			console.log(tempVal[i].innerText);
		} else if(elem.value == "C") {
			var val2 = tempVal[i].innerText;
			tempVal[i].innerText = Math.round(((val2 - 32) * 5) / 9);
			console.log(tempVal[i].innerText);
		}
	}
}