//simple class declaration
class Point{
    //by default, all menbers are public if no access modifiers are provided
    //public: can be accessed anywhere outside the class
    //private: can only be accessed within the class
    //protected:
    private x: number;
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

    //public is redundant
    public getDistance() {
        console.log('getting distance...');
    }
}

//initialize object with a constructor
let point = new Point(2, 3);
//point.x = 10;     //this will give you an error
point.y = 5;

console.log('drawing point 1 with contructor (no parameter)...');
point.draw();
