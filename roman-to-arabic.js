//Script que converte algarismos romanos para indo-arábicos
//Data: 29/01/2023

function romanToInt (number){
    const roman = 
    {
        'I':    1,
        'V':    5,
        'X':   10,
        'L':   50,
        'C':  100,
        'D':  500,
        'M': 1000,
    }

    function evaluateInteger(total, elm, index){

        if (roman[number[index - 1]] < roman[elm] && index > 0) {

            return total + roman[elm] - (2 * roman[number[index - 1]]);

        }
        else {

            return total + roman[elm];

        }

    }

    return number.split("").reduce(evaluateInteger, 0);

    
}
