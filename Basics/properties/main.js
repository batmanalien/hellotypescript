//simple class declaration
var Point = (function () {
    // convention is to use camel case for naming fields
    // prefix underscore to fields to avoid colision with getters and setters
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('drawing x = ' + this._x + ', y = ' + this._y);
    };
    // an getter for x
    Point.prototype.getX = function () {
        return this._x;
    };
    // an setter for x
    Point.prototype.setX = function (value) {
        if (value < 0)
            throw new Error('value cannot be less than 0');
        this._x = value;
    };
    Object.defineProperty(Point.prototype, "x", {
        // an property getter for X
        get: function () {
            return this._x;
        },
        // an property setting for X
        // can define validation logic
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
//initialize object with a constructor
var point = new Point(2, 3);
point.setX(10);
// set the property
// must use tsc properties/main.ts -t 'es2015' or higher to compile
point.x = 99;
console.log('drawing point 1 with contructor (no parameter)...');
point.draw();
