let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// your code here
function mergeTwoList(x) {
    let even = [];
    let odd = [];
    x.forEach(element => {
       (element % 2 == 0 ? even.push(element) : odd.push(element))
    });
    let union= odd.concat(even);
    return union;
}

console.log(mergeTwoList(list_of_numbers))
