var x = (prompt("Which geometrical shape's do you want out of square, rectangle, paralellogram, circle or triangle "))
switch (x) {
    case 'circle':
        var r = prompt("Enter the radius of the circle in centimeters");
        var a = r ** 2 * 22/7;
        console.log(a, "is the area of the circle");        
        break;
    case 'square':
        var s = prompt("Enter the length of the side of the square in centimeters");
        var a = s * s;
        console.log(a, "is the area of the square");
        break;
    case 'rectangle':
        var l = prompt("Enter the length of the rectangle in centimeters");
        var b = prompt("Enter the breadth of the rectangle in centimeters");
        var a = l * b;
        console.log(a, "is the area of the rectangle");
        break;
    case 'paralellogram':
        var h = prompt("Enter the height of the paralellogram in centimeters");
        var b = prompt("Enter the breadth of the paralellogram in centimeters");
        var a = h * b;
        console.log(a, "is the area of the paralellogram");
        break; 
    case 'triangle':
        var h = prompt("Enter the height of the triangle in centimeters");
        var b = prompt("Enter the breadth of the triangle in centimeters");
        var a = h / 2 * b;
        console.log(a);     
    default:
        if (x != 'circle' && 'square' && 'rectangle' && 'paralellogram' && 'triangle')
        alert("Data not given");
        break;
}