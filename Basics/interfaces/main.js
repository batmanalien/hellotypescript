//inline annotation to pass a point object to function
var drawPoint = function (point) {
    console.log('drawing point...');
};
drawPoint({ x: 1, y: 2 });
var drawPointWithInterface = function (point) {
    console.log('drawing point with interface...');
};
drawPointWithInterface({ x: 1, y: 2 });
