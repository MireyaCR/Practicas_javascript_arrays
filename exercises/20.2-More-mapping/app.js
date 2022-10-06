

var myNumbers = [23, 234, 345, 4356234, 243, 43, 56, 2];

// your code here
function myFunction(params) {
    newArray = function(value) {
    return value * 3;
    }
    myNumbers.map(newArray)
}
console.log(myFunction);
