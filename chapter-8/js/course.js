/* var anObject = {
	a: 2
}

// creating another object using the initially created 'anObject' as a prototype
var anotherObject = Object.create(anObject);

console.log(anotherObject.a);  */


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


