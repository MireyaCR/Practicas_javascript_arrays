var arr = [4, 5, 734, 43, 45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************
function getRandomInt() {
    var randomNumber = Math.floor(Math.random() * 9) + 1;
    return randomNumber;
}
for (var i = 0; i < 10; i++) {
    arr.push(getRandomInt());
}
console.log(arr);