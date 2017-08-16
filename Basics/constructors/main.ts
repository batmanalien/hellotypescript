//simple class declaration
class Point{
    x: number;
    y: number;

    //in typescript, only one contructor is allowed
    //? makes the parameter optional
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('drawing x = ' + this.x + ', y = ' + this.y);
    }

    getDistance() {
        console.log('getting distance...');
    }
}

//initialize object with a constructor
let point1 = new Point();
let point2 = new Point(2, 3);
console.log('drawing point 1 with contructo (no parameter)...');
point1.draw();
console.log('drawing point 2 with contructor...');
point2.draw();