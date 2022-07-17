function Persona (nombre, apellido, edad) {
	this.nombre = nombre,
	this.apellido = apellido,
	this.edad = edad
}

function crearPersonas() {

	var personas = [];
	var numPersonas = prompt("¿Cuantas personas desea crear?");

	for(var i = 0; i < numPersonas; i++) {
		var nombre = prompt(`Digite el nombre de la persona N°${i + 1}`);
		var apellido = prompt(`Digite el apellido de la persona N°${i + 1}`);
		var edad = prompt(`Digite la edad de la persona N°${i + 1}`);

		personas.push(new Persona(nombre, apellido, edad));	
	}

	personas.forEach(function(persona) {
		console.log(persona.nombre + " " + persona.apellido + " " + persona.edad);
	});
}

crearPersonas();