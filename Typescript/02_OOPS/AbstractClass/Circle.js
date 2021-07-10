"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var AbstractShape_1 = require("./AbstractShape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(_radius, theX, theY) {
        var _this = _super.call(this, theX, theY) || this;
        _this._radius = _radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * (this._radius * this._radius);
    };
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (r) {
            this._radius = r;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (", radius=" + this._radius);
    };
    return Circle;
}(AbstractShape_1.Shape));
exports.Circle = Circle;
