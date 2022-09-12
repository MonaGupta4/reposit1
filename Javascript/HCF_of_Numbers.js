svar i = 
var x = prompt("Enter the First Number");
var y = prompt("Enter the Second Numeber ");
var z = prompt("Enter the Third Number");
while (i<x && y && z) {
    if (x % i === 0 && y % i === 0 && z % i === 0) {
        console.log("Apart from", 1, ",", i, "is the HCF of", x, ',', y, 'and', z);
        break;
    }
 i--;
}    