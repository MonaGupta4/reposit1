var Number, inch = prompt("Enter the value in Inch");
var feet = parseInt(inch / 12);
var fi = inch % 12;
if (inch % 12 == 0) {
    console.log(inch, "inch is equal to", feet, "feet");
}
else console.log(inch, "inch is equal to", feet, "feet", "and", fi, "inches");