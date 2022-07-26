var i = 1;
var x = prompt("Enter the First Number")
var y = prompt("Enter the Second Numeber ")
var z = prompt("Enter the Third Number")
var Number, num = prompt("Type the Number");
while (i <= num) {
    if (i % 2 === 0 || i % 3 === 0 || i % 6 === 0) {
        console.log(i);
    }
    i++;
}
