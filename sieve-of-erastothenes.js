//Script que retorna a sequẽncia de números primos existentes até um dado número
//Data 29/01/2023

let number = 1 + (+window.prompt("Insira um número"));
let isPrime = Array(number);
let factors = [];

isPrime.fill(true,2, number);

for (let prime = 2; prime * prime <= isPrime.length; prime++) {

    if (isPrime[prime]) {

        for (let i = prime * prime; i < isPrime.length; i += prime) {

                isPrime[i] = false;

            }
        }

    }

for(i = 2; i < isPrime.length; i++) {

    isPrime[i] ? document.writeln(i) : null;

}