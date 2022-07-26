var x=prompt("How many numbers do you want in the Fibonnaci Series");
var num1=0;
var num2=1;
var sum=num1+num2;
console.log(sum);
for(var i=1;i<=x-1;i++) {
    console.log(sum);
    num1=num2;
    num2=sum;
    sum=num1+num2;
}