// Ряд Фиббоначи — это 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
let calls = 0;
function fibonacci(n) {

    if (n <= 1) {
        return n
    };
    return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(45))
