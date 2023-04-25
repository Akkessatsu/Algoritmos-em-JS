//Script que converte um número na base decimal para uma das 3 bases possíveis (binária, octal, hexadecimal)
//Data: 29/01/2023

"use strict"

const hexDigits = 
{
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
}

let number = +window.prompt("Insira um número");
let base = +window.prompt("Insira uma das bases numéricas disponíveis (2 - binária, 8 - octal, 16 - hexadecimal)");
let converted = "";

while (parseInt(number) != 0){

    let resto = parseInt(number) % base;

    resto >= 10 && resto <= 15 ? converted += hexDigits[resto] : converted += resto.toString();

    number /= base;

}

console.log(`${converted.split("").reverse().join("")}`);

