var x = prompt("Enter the amount");
var dis;
if (x >= 5000) dis = 20;
else if (x < 5000 && x >= 2500) dis = 10;
else if (x < 2500 && x >= 2000) dis = 5;
else dis = 0;
x = x - (dis * x) / 100;
console.log("You got", dis, "percent discount");
console.log("Your net bill amount is", x);
