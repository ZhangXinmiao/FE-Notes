function zero (a, b) {
    if (a === b) return a!== 0 || (1 / a) === (1 / b);
    return false;
}

console.log(zero(1, 1));
console.log(zero(-1, -1));
console.log(zero(1, -1));