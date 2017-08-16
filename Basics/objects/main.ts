//simple class declaration
class Point{
    x: number;
    y: number;
    draw() {
        console.log('drawing x = ' + this.x + ', y = ' + this.y);
    }

    getDistance() {
        console.log('getting distance...');
    }
}

//let point: Point = new Point();
let point = new Point();
point.x = 2;
point.y = 3;
point.draw();
point.getDistance();