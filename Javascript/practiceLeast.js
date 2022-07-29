var x = +prompt("enter the first number");
var y = +prompt("enter the second number");
var z = +prompt("enter the third number");

 

if(x<y)
{
    if (x<z)
    {
    console.log(x+" is least");
    }
    else
    {
    console.log(z +" is least number");
    }

}
else
{
    if(y<z)
    {
    console.log(y+" is least number");
    }
    else
    {
     console.log(z+" is least number");
    }
}

