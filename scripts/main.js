let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function displayText() {
	let myInput = prompt('What do you want to display?');
	localStorage.setItem('input', myInput);
	myHeading.textContent = myInput;
}

myButton.onclick = function() {
	displayText();
}
