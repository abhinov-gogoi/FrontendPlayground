import { Shape } from "./AbstractShape";

export class Circle extends Shape {
    calculateArea(): number {
        return Math.PI*(this._radius*this._radius);
    }
    
    constructor(private _radius: number, theX: number, theY: number, ) {
        super(theX, theY);
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(r: number) {
        this._radius = r;
    }

    public getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}