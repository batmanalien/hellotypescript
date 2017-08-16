let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

//old way of declaring constants
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

//new way of declaring constants using enum
//first enum gets a value of 0 by default
enum Color {Red, Green, Blue};
//still, best practice is to assign values to enums
//enum Color {Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Blue;
console.log(backgroundColor);