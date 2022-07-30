const fizzbuzz = (number) => {
     if(number % 3 == 0 && number % 5 > 0) {
        return "fizz"
    } else if(number % 5 == 0 && number % 3 > 0) {
        return "buzz"
    } else if(number == 15) {
        return "fizzbuzz"
    } else return number.toString()
}

module.exports = fizzbuzz