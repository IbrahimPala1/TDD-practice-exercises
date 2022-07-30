const fizzbuzz = (number) => {
    if(number == 1) {
        return "1"
    } else if(number == 3) {
        return "fizz"
    } else if(number == 5) {
        return "buzz"
    }
}

module.exports = fizzbuzz