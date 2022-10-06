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

function matrixBuilder2(entero) {
    return [...Array(entero)].map(()=>{
        return [...Array(entero)].map(()=>Math.floor(Math.random() * 2))
    })
}

// do not change anything from this line down
console.log(matrixBuilder2(5))