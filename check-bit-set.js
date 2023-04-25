function checkBitSet(number, index){
    let tester = 1;

    tester <<= index;

    return number & tester ? true : false; 
}