export class Shape {
    // parameter properties from constructor
    constructor(private _x: number, private _y: number) {
    }

    // getters and setters
    public get x(): number {
        return this._x;
    }

    public set x(x: number) {
        this._x = x;
    }

    public get y(): number {
        return this._y;
    }

    public set y(y: number) {
        this._y = y;
    }

    // getInfo method
    public getInfo(): string {
        return `x=${this._x}, y=${this._y}`
    }
}