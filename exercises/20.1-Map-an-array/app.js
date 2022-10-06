var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
	//add your code here and return the new value
	return(9/5*value)+32
	
});

console.log(arrayOfFahrenheitValues);