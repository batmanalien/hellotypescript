//inline annotation to pass a point object to function
let drawPoint = (point: {x: number, y: number}) => {
    console.log('drawing point...');
}

drawPoint({x: 1, y: 2})

//use interface to pass point object to function
interface Point{
    x: number,
    y: number
}

let drawPointWithInterface = (point: Point) => {
    console.log('drawing point with interface...');
}

drawPointWithInterface({x: 1, y: 2});