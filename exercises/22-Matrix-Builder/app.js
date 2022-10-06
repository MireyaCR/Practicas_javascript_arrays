// Code goes here
function matrixBuilder(entero) {
    let nmatriz=[]
    for (let index = 0; index < entero; index++) {
        let matris=[]
        for (let j = 0; j < entero; j++) {
            matris.push(Math.floor(Math.random() * 2))
        }
        nmatriz.push(matris)
    }
    return nmatriz;
}


// do not change anything from this line down
console.log(matrixBuilder(5))