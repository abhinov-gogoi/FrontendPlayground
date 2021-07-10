"use strict";
// ERROR -> Accessors are only available when targeting ECMAScript 5 and higher
// use --target es5 compiler flag while compiling (tsc --target es5 Accessors.ts)
// OR we can put all compiler flags in tsconfig file
// tsc --init generates the tsconfig.json file
var Customer2 = /** @class */ (function () {
    function Customer2(name, age) {
        this.name = name;
        this._age = age;
    }
    Customer2.prototype.getName = function () {
        return this.name;
    };
    Customer2.prototype.setName = function (name) {
        this.name = name;
    };
    Object.defineProperty(Customer2.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Customer2;
}());
var customer2 = new Customer2("John Doe", 33);
customer2.setName("Abhinov");
console.log(customer2.getName());
customer2.age = 24;
console.log(customer2.age);
