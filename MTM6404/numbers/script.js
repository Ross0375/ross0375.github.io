//is even
//return true if the provided number is an even number
//or false if it's not

function isEven(number) {
    return number % 2 === 0
};

console.log(isEven(17));

//isPrime
//test if provided number is prime
//return true, if prime
//return false if not prime

function isPrime(number) {
    for(let i = number - 1; i > 1; i--){
        if (number % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(127));