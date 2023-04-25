#!/usr/binn/node

function isPowerOfTwo(number, cnt = 0){

    if (number <= 0){

        return cnt == 1 ? true : false;

    }

    return isPowerOfTwo(number & (number - 1), ++cnt);
    
}