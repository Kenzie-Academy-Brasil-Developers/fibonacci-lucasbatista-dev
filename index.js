let arrayFibonacci = [];
function fibonacci(value) {
  arrayFibonacci[0] = 0;
  arrayFibonacci[1] = 1;
  for (let i = 2; i < value; i++) {
    arrayFibonacci[i] = arrayFibonacci[i - 2] + arrayFibonacci[i - 1];
  }
  return arrayFibonacci;
}
fibonacci(10);

console.log(
  `O resultado da chamada do arrayFibonacci na posição 7 é = ${arrayFibonacci[7]}`
);
