//Script que checa se o número passado como parâmetro é primo ou composto
//Data: 29/01/2023

function checkPrime (number){

    let compost = false;

    for (let p = 2; p * p <= number; p++){

        if (!number % p) {
            compost = true;
            break;
        }
    }

    return compost ? `O número ${number} é composto` : `O número ${number} é primo`;
}