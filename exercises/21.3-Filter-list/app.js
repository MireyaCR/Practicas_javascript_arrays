let names = ['Liam', 'Emma', 'Noah', 'Olivia', 'William', 'Ava', 'James', 'Isabella', 'Logan', 'Sophia', 'Benjamin', 'Mia', 'Mason', 'Charlotte', 'Elijah', 'Amelia', 'Oliver', 'Evelyn', 'Jacob', 'Abigail', 'Lucas', 'Harper', 'Michael', 'Emily', 'Alexander', 'Elizabeth', 'Ethan', 'Avery', 'Daniel', 'Sofia', 'Matthew', 'Ella', 'Aiden', 'Madison', 'Henry', 'Scarlett', 'Joseph', 'Victoria', 'Jackson', 'Aria', 'Samuel', 'Grace', 'Sebastian', 'Chloe', 'David', 'Camila', 'Carter', 'Penelope', 'Wyatt', 'Riley'];

//declare your function here
function filterByName(array, filter) {
    const newArray = array.filter((element) => {
        const namemin = element.toLowerCase();
        const filtermin = filter.toLowerCase();
        return namemin.includes(filtermin);
    })
    return newArray
}

function filterByName2(array, filter) {
    return array.filter((element)=>element.toLowerCase().includes(filter.toLowerCase()))
}
console.log(filterByName2(names, 'am'));

