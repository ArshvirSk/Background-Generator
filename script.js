var h3css = document.querySelector("h3");
var h4css = document.querySelector("h4")
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var randomColor = document.querySelector(".randomcolors");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ", " + color3.value + ")";

	h3css.textContent = body.style.background + ";";
}

// Added by ASK
function random_bg_color() {
    var x = '#'+Math.floor(Math.random()*16777215).toString(16);
    var y = '#'+Math.floor(Math.random()*16777215).toString(16);
    var z = '#'+Math.floor(Math.random()*16777215).toString(16);
    var bgColor = "linear-gradient(to right, " + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;
    h3css.textContent = body.style.background + ";";
}

// Added By ASK
function randoMButtonColor() {
	var a = '#'+Math.floor(Math.random()*16777215).toString(16);
	document.querySelector(".randomcolors").style.backgroundColor = a;
}

function compliments() {
    
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

randomColor.addEventListener("click", random_bg_color);

randomColor.addEventListener("click", randoMButtonColor);

h3css.textContent = body.style.background + ";";
