/*var cake = {
	flavor: "vanilla",
	price: "$10", 
	layers: 4,
	occasion:"birthday",
// Describing the cake here 
	describe: function () {
	var description ="The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.layers +
	" layers, and costs " + this.price + ".";
	return description;
	} // this description method is inside the cake property and hence the use of 'this'
};

console.log(cake.describe()); // using the method as cake property here 

	cake.occasion = "wedding"; // this cake is for wedding 
	cake.flavor = "strawberry";
	cake.layers = cake.layers + 8; // number of layers and price go up! 
	cake.price = "$50";

	console.log(cake.describe());
	*/
	var muffin = {
	type: "muffin"
	flavor: "blueberry",
	price: "$10", 
	layers: 1,
	occasion:"breakfast",
// Describing the pastry here 
	describe: function () {
	var description ="The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.layers +
	" layers, and costs " + this.price + ".";
	return description;
	} // this description method is inside the cake property and hence the use of 'this'
};