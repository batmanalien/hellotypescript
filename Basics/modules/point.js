"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//need to use the export keyword to make the class accessible to the outside
//now this class becomes an module
var Point = (function () {
    // convention is to use camel case for naming fields
    // also convention to use prefix underscore to fields to avoid colision with getters and setters
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
exports.Point = Point;
