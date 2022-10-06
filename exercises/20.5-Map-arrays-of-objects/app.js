let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

function getEdad(fechaNacimiento) {
	let hoy = new Date()
	//let fechaNacimiento = new Date(dateString)
	let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
	let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
	if (
	  diferenciaMeses < 0 ||
	  (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
	) {
	  edad--
	}
	return edad
  }

let simplifier = function(person){
	
	return `Hello, my name is ${person.name} and I am ${getEdad(person.birthDate)} years old`;
};

console.log(people.map(simplifier));