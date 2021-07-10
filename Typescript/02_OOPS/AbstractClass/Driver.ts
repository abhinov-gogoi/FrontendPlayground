import { Shape } from "./AbstractShape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(3, 0, 0);
let myRectangle = new Rectangle(4, 5, 0, 0);

let shapes: Shape[] = [];
shapes.push(myCircle);
shapes.push(myRectangle);

for(let shape of shapes) {
    console.log(shape.getInfo())
    console.log(shape.calculateArea());
    console.log()
}

