var mix = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];

//your code here

var nuevo= mix.map(function(x){
        return typeof(x);
});
console.log(nuevo);
