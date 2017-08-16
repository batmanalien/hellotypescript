//simple class declaration
class Point{
    // if we have access modifiers in constructor parameters
    // no need to declare private fields
    // private x: number;
    // private y: number;

    //in typescript, only one contructor is allowed
    constructor(public x?: number,private y?: number){
        // no needed if has declare in constructor parameters
        // this.x = x;
        // this.y = y;
    }

    draw() {
        console.log('drawing x = ' + this.x + ', y = ' + this.y);
    }

    //public is redundant
    public getDistance() {
        console.log('getting distance...');
    }
}

//initialize object with a constructor
let point = new Point(2, 3);
point.x = 10;
//point.y = 4; // error because y is private
console.log('drawing point 1 with contructor (no parameter)...');
point.draw();
