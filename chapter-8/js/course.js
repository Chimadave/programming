/* var anObject = {
	a: 2
}

// creating another object using the initially created 'anObject' as a prototype
var anotherObject = Object.create(anObject);

console.log(anotherObject.a);  */


/*
var Pastry = {
	type: "",
	flavor: "",
	layers: 0,
	price: "",
	occasion: "",

	//Describing the pastry here 
	describe: function () {
	var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, "	
	+ this.layers + " layers and costs " + this.price + ".";
	return description;
	}
};

// now cake and muffins will leverage on the prototype of pastry.

 var muffin = Object.create(Pastry);
muffin.type = "muffin";
muffin.flavor = "blueberry";
muffin.layers = 1;
muffin.price = "$2";
muffin.occasion = "breakfast"; 

var cake = Object.create(Pastry)
cake.type = "cake";
cake.flavor = "vanilla";
cake.layers = 3;
cake.price = "$10"
cake.occasion = "birthday";

// display 
console.log(muffin.describe());
console.log(cake.describe());

// for wedding 
cake.occasion = "wedding"; 
cake.layers = 12;
cake.price = "$50";
cake.flavor = "red-velvet"; 

cake.type = "cake"

console.log (cake.describe());

 */
// the object pastry has 2 properties which are methods
var Pastry = {
	// initialize the pastry 
	init: function(type, flavor, layers, price, occasion){ // a method giving the pastry properties
		this.type = type;
		this.flavor = flavor;
		this.layers = layers;
		this.price = price;
		this.occasion = occasion;
	},

	// describe the pastry
	describe: function(){ // a method describing the pastry
		var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor,  "
		+ this.layers + " layer(s) and costs " + this.price + "."
		return description;
	},

	bake: function () {
		var baked = "The " + this.flavor + " " + this.type + " was placed in the oven. It's done!"
	return baked;
	}, 

	eat: function(){
		var eaten = "The " + this.flavor + " " + this.type + " has been eaten!!"
		return eaten; 
	}
}; 

var muffin = Object.create(Pastry);
muffin.init ("muffin", "blueberry", 1, "$2", "breakfast");

var cake = Object.create(Pastry);
cake.init("cake", "vanilla", 3, "$10", "birthday");

console.log(muffin.bake()); 
console.log(muffin.describe());
console.log(muffin.eat());

console.log(cake.bake());
console.log(cake.describe());
console.log(cake.eat()); 

cake.init("cake", "red-velvet", 12, "$50", "wedding"); 
console.log(cake.bake());
console.log(cake.describe());
console.log(cake.eat());
