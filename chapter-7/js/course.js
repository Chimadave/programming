var cake = {
	flavor: "vanilla",
	price: "$10", // dollars
	layers: 4,
	occasion:"birthday"
};

console.log("The " + cake.occasion + " cake has a " + cake.flavor + " flavor, " + cake.layers +
	" layers, and costs " + cake.price + "." );

	cake.occasion = "wedding";
	cake.flavor = "strawberry";
	cake.layers = cake.layers + 8;
	cake.price = "$50";

	console.log("The " + cake.occasion + " cake has a " + cake.flavor + " flavor, " 
		+ cake.layers + " layers, and costs " + cake.price + "."); 
