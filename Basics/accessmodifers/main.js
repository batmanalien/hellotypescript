//simple class declaration
var Point = (function () {
    // if we have access modifiers in constructor parameters
    // no need to declare private fields
    // private x: number;
    // private y: number;
    //in typescript, only one contructor is allowed
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // no needed if has declare in constructor parameters
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('drawing x = ' + this.x + ', y = ' + this.y);
    };
    //public is redundant
    Point.prototype.getDistance = function () {
        console.log('getting distance...');
    };
    return Point;
}());
//initialize object with a constructor
var point = new Point(2, 3);
point.x = 10;
//point.y = 4; // error because y is private
console.log('drawing point 1 with contructor (no parameter)...');
point.draw();
