//import multiple modules usine {a, b, c...}
//use the relative path of the module without the ts extension
//if importing from node modules, use the library name as the module
//ex: import { Point } from '@angular/core';
import { Point } from './point';

//initialize object with a constructor
let point = new Point(2, 3);
point.setX(10);
// set the property
// must use tsc properties/main.ts -t 'es2015' or higher to compile
point.x = 99;
console.log('drawing point 1 with contructor (no parameter)...');
point.draw();
