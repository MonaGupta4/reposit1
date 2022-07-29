var x = +prompt("enter the first number");
var y = +prompt("enter the second number");
var z = +prompt("enter the third number");

 

if(x>y)
{
    if (x>z)
    {
    console.log(x+" is greatest");
    }
    else
    {
    console.log(z +" is greatest number");
    }

}
else
{
    if(y>z)
    {
    console.log(y+" is greatest number");
    }
    else
    {
     console.log(z+" is greatest number");
    }
}
