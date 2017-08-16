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
    Point.prototype.getDistance = function () {
        console.log('getting distance...');
    };
    return Point;
}());
//initialize object with a constructor
var point1 = new Point();
var point2 = new Point(2, 3);
console.log('drawing point 1 with contructo (no parameter)...');
point1.draw();
console.log('drawing point 2 with contructor...');
point2.draw();
