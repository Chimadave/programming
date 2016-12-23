var weather = prompt("What's the weather like? \n(sunny, windy, rainy or snowy)");
if (weather === "sunny") {
	console.log("T-shirt time!");
} else if (weather === "windy") {
	console.log("Windbreaker life.");
} else if (weather === "rainy") {
	console.log("Bring that umbrella!");
} else if (weather === "snowy") {
	console.log("Just stay inside!");
} else {
	console.log("Not a valid weather type");
}