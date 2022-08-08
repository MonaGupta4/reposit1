var i = 1;
var x = prompt("Enter the First Number");
var y = prompt("Enter the Second Numeber");
var z = prompt("Enter the Third Number");
while (true) {
  if (i % x === 0 && i % y === 0 && i % z === 0) {
    console.log(i, "is the LCM of", x, ",", y, "and", z);
    break;
  }
  i++;
}
