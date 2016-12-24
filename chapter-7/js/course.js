var cake = {
	flavor: "vanilla",
	price: "$10", 
	layers: 4,
	occasion:"birthday",

	describe: function () {
	var description ="The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.layers +
	" layers, and costs " + this.price + ".";
	return description;
	}
};


console.log(cake.describe());

	cake.occasion = "wedding";
	cake.flavor = "strawberry";
	cake.layers = cake.layers + 8;
	cake.price = "$50";

	console.log(cake.describe());