/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    let res = "";

    const symbols = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"],
    ]

    num = num.toString().split("").reverse().join("");

    for (let i = num.length - 1; i >= 0; i--){
        res += symbols[i][num[i]];
    }


    return res;
};