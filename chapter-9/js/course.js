 var films = ["Jurassic Park", "Titanic", "Toy Story", "Windtalkers"];

// console.log(films.length);
/*
var emptyArray = []; // creates an empty array

console.log(emptyArray.length); 
*/
/* films.push("The Patroit");
for (i = 0; i <films.length; i++) {

 console.log(films[i]);
}
*/


var Film = {
	//initialize film
	init:function (title, year){
		this.title = title;
		this.year = year;
	}, 
	// describ the film
	describe: function() {
		var description = this.title  + " ("+ this.year +")";
		return description;
	}
}; // this fully initializes a film and describes it. 

var film1 = Object.create(Film); // creates film1 based on the prototype of Film
film1.init("Jurassic Park", 1993);

var film2 = Object.create(Film); 
film2.init("Titanic", 1997);

var film3 = Object.create(Film);
film3.init("Toy Story", 1995);


var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film){
	console.log(film.describe());
});