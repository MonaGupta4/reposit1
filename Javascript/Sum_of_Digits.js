var num = parseInt(prompt());
var sum = 0, n = num;
while (n > 0) {
   sum += (n % 10);
   n = Math.floor(n / 10);
}

console.log("Sum of the digits of " + num + " = " + sum);