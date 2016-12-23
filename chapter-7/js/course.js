var pen = {
	type: "ballpoint",
	color: "blue",
	brand: "Bic"
};

console.log(pen.brand);

console.log("My pen is a " + pen.color + " " + pen.brand + " " + pen.type + " pen.");

pen.color = "red";
pen.price = "2.5"; 

console.log("My pen is a " + pen.color + " " + pen.brand + " " + pen.type + " pen.");
console.log("My pen costs " + "$" + pen.price);
