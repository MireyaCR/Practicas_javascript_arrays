let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
// your code here


par = par.toLowerCase(); // convertir la cadena en minuscula
par = par.replace(/\s/g, ''); // quitar espacios en blanco
for (var i = 0; i < par.length; i++) {// recorro las letras
    let letra = par[i];
    if (counts[letra]) {
        counts[letra]++;
    } else {
        counts[letra] = 1;
    }
  }
console.log(counts);