//simple class declaration
class Point{
    // convention is to use camel case for naming fields
    // also convention to use prefix underscore to fields to avoid colision with getters and setters
    constructor(private _x?: number,private _y?: number){
    }

    draw() {
        console.log('drawing x = ' + this._x + ', y = ' + this._y);
    }

    // an getter for x
    getX(){
        return this._x;
    }

    // an setter for x
    setX(value){
        if(value < 0)
            throw new Error('value cannot be less than 0');

        this._x = value;
    }

    // an property getter for X
    get x(){
        return this._x;
    }

    // an property setting for X
    // can define validation logic
    set x(value){
        if(value < 0)
            throw new Error('value cannot be less than 0');

        this._x = value;
    }
}

//initialize object with a constructor
let point = new Point(2, 3);
point.setX(10);
// set the property
// must use tsc properties/main.ts -t 'es2015' or higher to compile
point.x = 99;
console.log('drawing point 1 with contructor (no parameter)...');
point.draw();
