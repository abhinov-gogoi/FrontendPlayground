import { Shape } from "./AbstractShape";

export class Rectangle extends Shape {
    
    calculateArea(): number {
        return (this.width*this.length);
    }
    
    constructor(private _width: number, private _length: number, theX: number, theY: number, ) {
        super(theX, theY);
    }

    public get width(): number {
        return this._width;
    }

    public set width(w: number) {
        this._width = w;
    }

    public get length(): number {
        return this._length;
    }

    public set length(l: number) {
        this._length = l;
    }

    public getInfo(): string {
        return super.getInfo() + `, width=${this._width}, length=${this._length}`;
    }
}