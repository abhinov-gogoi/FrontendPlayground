import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myShape = new Shape(2, 4);
console.log(myShape.getInfo());

let myCircle = new Circle(3, 0, 0);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(2, 3, 0, 0);
console.log(myRectangle.getInfo());

// Object array
let shapes: Shape[] = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

for(let shape of shapes) {
    console.log(shape.getInfo());
}