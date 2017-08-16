//simple class declaration
var Point = (function () {
    //in typescript, only one contructor is allowed
    //? makes the parameter optional
    function Point(x, y) {
        this.x = x;
        this.y = y;
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
//point.x = 10;     //this will give you an error
point.y = 5;
console.log('drawing point 1 with contructor (no parameter)...');
point.draw();
