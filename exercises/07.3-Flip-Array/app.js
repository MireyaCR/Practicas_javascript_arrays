var arr = [45, 67, 87, 23, 5, 32, 60];

//Your code here.
var ultimo = [arr.length-1];
var nuevo = [];
for (var i = ultimo; i >= 0; i--) {
    nuevo.push(arr[i]);
}
console.log(nuevo);