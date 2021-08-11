const candidateForPrime = document.getElementById("prime");
const primeChecker = document.getElementById("checkPrime");
const resPrime = document.getElementById("resForPrime");

const number = document.getElementById("factorial");
const factorialResult = document.getElementById("findFactorial");
const resFactorial = document.getElementById("resForFactorial");

const candidateForLeap = document.getElementById("leap");
const leapChecker = document.getElementById("checkLeapYear");
const resLeap = document.getElementById("resForLeap");

function checkForPrime(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function factorialOfNumer(n) {
    var fact = 1;
    var mod = 1000000007;
    for (var i = 1; i <= n; i++) {
        fact *= i;
        if (i > 18) fact %= mod;
    }
    return fact;
}

function checkForLeapYear(year) {
    if ((year % 100) == 0) {
        if ((year % 400) == 0) {
            return true;
        } else {
            return false;
        }
    } else if ((year % 4) == 0) {
        return true;
    } else {
        return false;
    }
}

function primeHandler() {
    var num = parseInt(candidateForPrime.value);
    console.log(candidateForPrime.value);
    if (num <= 1 || num > 100000000 || num != candidateForPrime.value) {
        resPrime.innerHTML = "!! Enter number within range !!";
        return;
    }
    if (checkForPrime(num)) {
        resPrime.innerHTML = "!! A prime number !!";
    } else {
        resPrime.innerHTML = "!! Not a prime number !!";
    }
}

function factorialHandler() {
    var num = parseInt(number.value);
    if (num < 0 || num > 1000000 || num != number.value) {
        resFactorial.innerHTML = "!! Enter number within range !!";
        return;
    }
    var res = factorialOfNumer(num);
    resFactorial.innerHTML = "!! Factorial is " + res + " !!";
}

function leapHandler() {
    var num = parseInt(candidateForLeap.value);
    if (num < 0 || num != candidateForLeap.value) {
        resLeap.innerHTML = "!! Enter a valid year !!";
        return;
    }
    if (checkForLeapYear(num)) {
        resLeap.innerHTML = "!! A leap year !!"
    } else {
        resLeap.innerHTML = "!! Not a leap year !!"
    }
}

primeChecker.addEventListener("click", primeHandler);

factorialResult.addEventListener("click", factorialHandler);

leapChecker.addEventListener("click", leapHandler);