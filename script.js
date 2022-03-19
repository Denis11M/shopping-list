var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function toggleClassDoneOnAndOff(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

function removeItem(item){
        var itemToRemove = document.getElementById(item);
        itemToRemove.parentNode.removeChild(itemToRemove);
}

function addDelButton(parent) {
var buttonElem = parent.appendChild(document.createElement("button"));
buttonElem.innerHTML = "Delete";
buttonElem.onclick = function() {
    this.parentElement.remove();
}
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addDelButton(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleClassDoneOnAndOff);