//Function === f(x)= (x^2 + 9x + 20) / (x + 4)
let QudraticFunction = require('./js/QuadraticFunction');

const canvas = document.createElement('canvas'); // document.createElement
canvas.style.height = '1000px';
canvas.style.width = '1000px';
const context = canvas.getContext('2d'); // context -> how we interact with the canvas's draw API
canvas.height = 1000;
canvas.width = 1000;

const dpi = window.devicePixelRatio;
document.body.append(canvas);

context.fillRect(500, 500, 10, 10);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
    }
    get x() {return this.x};
    get y() {return this.y};
}

const fn = new QudraticFunction()
