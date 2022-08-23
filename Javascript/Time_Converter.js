var Number, millisecond = prompt("Enter the value in milliseconds");
var second = parseInt(millisecond / 1000);
var rmill = millisecond % 1000;
if (millisecond % 1000 == 0) {
    console.log(millisecond, "milliseconds is equal to", second, "seconds");
}
else console.log(millisecond, "milliseconds is equal to", second, "seconds", "and", rmill, "milliseconds");

var minute = parseInt(second / 60);
var rsec = second % 60;
if (second % 60 == 0) {
    console.log(millisecond, "milliseconds is equal to", minute, "minutes");
}
else console.log(millisecond, "milliseconds is equal to", minute, "minutes", "and", rsec, "seconds", "and", rmill, "milliseconds");

var hour = parseInt( minute / 60);
var rmin = minute % 60;
if (minute % 60 == 0) {
    console.log(millisecond, "milliseconds is equal to", hour, "hours");
}
else console.log(millisecond, "milliseconds is equal to", hour, "hours", rmin , "minutes", "and", rsec, "seconds", "and", rmill, "milliseconds");

console.log(hour+":"+rmin+":"+rsec+":"+rmill);