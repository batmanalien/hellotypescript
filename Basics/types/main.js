var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
//old way of declaring constants
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
//new way of declaring constants using enum
//first enum gets a value of 0 by default
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
//still, best practice is to assign values to enums
//enum Color {Red = 0, Green = 1, Blue = 2};
var backgroundColor = Color.Blue;
console.log(backgroundColor);
