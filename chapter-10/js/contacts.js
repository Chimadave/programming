/* console.log("Welcome to your contacts manager! \n Enter: \n 1: List contacts \n 2: Add a contact \n 0: Quit");
var contacts = {
	init:function (firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname; 
	}
};

var enteredChoice = prompt("Welcome to your contacts manager! \n Enter: \n 1: List contacts \n 2: Add a contact \n 0: Quit");
while (enteredChoice !==0){

switch (enteredChoice) {
	case "1":
		console.log("Display contacts");
		break;
	case "2":
		console.log("Add contacts");
		break;
	default:
		console.log("Invalid input!");
	}
}*/


// create an object called contacts, with properties and ability to be displayed
var contacts = {
	init:function(firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	},
	show: function(){
		var info = "Last name: " + this.lastname + ", " +  "first name: " + this.firstname;
		return info;
	}
};
var people = [];


	
	/*
	switch (enteredChoice) {

	case "1":
		console.log("Here is a list of all your contacts: \n ");
		for(i =0; i < people.length; i++){
			console.log(personi.show());
		}
		break;

	case "2":
		i =0;
		var firstnameX = prompt("Kindly enter the first name");
		var lastnameX = prompt("Lastname ");

		var personi = Object.create(contacts); 
 		personi.init(firstnameX, lastnameX); 
		people.push(personi); 
		i++;

		console.log("Contact added");
		break;


	case "0":
		break;

	default:
		console.log("Invalid input!");

	}*/
var x ="3";
while (x !=="0"){
	console.log("Welcome to your contacts manager! \n Enter: \n 1: List contacts \n 2: Add a contact \n 0: Quit");	

	var enteredChoice = prompt("Welcome to your contacts manager! \n Enter: \n 1: List contacts \n 2: Add a contact \n 0: Quit");
	x = enteredChoice;
	
	if (enteredChoice === "1" ) {
			// Enter the list contact process
			console.log("Here is a list of all your contacts: \n ");

		people.forEach(function (person) {
			console.log(person.show());
		});
		

		} else if (enteredChoice === "2") {
			// Enter the add contact process
		i =1;
		var firstnameX = prompt("Kindly enter the first name");
		var lastnameX = prompt("Lastname ");

		var personi = Object.create(contacts); 
 		personi.init(firstnameX, lastnameX); 
		people.push(personi); 
		i++;

		console.log("Contact added");

		} else if (enteredChoice !== "0" ) {
			console.log("Invalid input!");
		}

	}
		