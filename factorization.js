//Script que realiza a fatoração em fatores primos de um dado número
//Data: 29/01/2023

let number = +window.prompt("Insira um número");
let factors = [];

let p = 2;

while(p * p <= number){

    while (number % p === 0){

        number /= p;

        factors.push(p);

    }

    p++;
}

number != 1 ? factors.push(number) : null;

for(let n = 2; n <= Math.max(...factors); n++){

    let occ = getNumberOfTimes(factors,n);

    occ != 0 ? document.write(`${n}^${occ} *`) : null;
}

function getNumberOfTimes(arr, value){
    return arr.filter((elm) => (elm === value)).length;

    //Essa função serve para contar o número de incidências de um determinado valor passado como argumento (value)
}