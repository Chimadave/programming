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
 /*
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
*/
var Character = {
	// Initialize the character
	initCharacter: function (name, health, force) {
		this.name = name;
		this.health = health;
		this.force = force;
	},
	// Attack a target
	attack: function(target) {
		if (this.health > 0){
			var damage = this.force;
			console.log(this.name + " attacks " + target.name + " and causes " + damage + " damage points");
			target.health = target.health - damage;
			if (target.health > 0){
				console.log(target.name + " has " + target.health + " health points left!");
			} else {
				target.health = 0;
				console.log(target.name + " has been eliminated!");
			}
		} else {
			console.log(this.name + " can't attack (they have been eliminated).");
		}
	}
};

var Player = Object.create(Character);
// Initialize the player
Player.initPlayer = function(name, health, force) {
	this.initCharacter(name,health,force);
	this.xp = 0; 
};
// then describe the player
Player.describe = function () {
	var description = this.name + " has " + this.health + " health points, " + 
this.force + " force points " + this.xp + " experience points";
return description;
};
// Fight an ememy
Player.fight = function(enemy) {
	this.attack(enemy);
	if (enemy.health === 0){
		console.log(this.name + " eliminated " + enemy.name + " and wins " +
            enemy.value + " experience points");
        this.xp += enemy.value;
	}
}; 

var Enemy = Object.create (Character);  // creates enemy character
// initializing enemy 
Enemy.intiEnemy = function (name, health, force, species, value) {
	this.initCharacter(name, health, force);
	this.species = species;
	this.value =value;
};
// describe the enemy
Enemy.describe = function(){
	var description = "A wild monster has appeared: it's a(n) " + monster.species + " named " + monster.name ;
	return description;
};

// objects have now been modelled, thier properties, actions and behaviour. 
// now we proceed to interact with the objects
var player1 = Object.create(Player);
player1.initPlayer("Shekinah Bobo", 150, 25);

var player2 = Object.create(Player);
player2.initPlayer("Ronnie", 130, 30);

console.log("Welcome to the adventure! \n Here are our heros:");
console.log(player1.describe());
console.log(player2.describe());

var monster = Object.create(Enemy);
monster.intiEnemy("Spike", 40, 20, "orc", 10);
console.log("\n");
console.log(monster.describe());

// fights go on here
monster.attack(player1);
monster.attack(player2);

player1.fight(monster);
player2.fight(monster);

console.log(player1.describe());
console.log(player2.describe());
