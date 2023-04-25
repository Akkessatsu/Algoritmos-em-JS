function checkSetBits(number, count = 0) {

    if (number == 0){
        return count;
    }

    number & 1 ? ++count : null;

    return checkSetBits(number >> 1, count);
}   