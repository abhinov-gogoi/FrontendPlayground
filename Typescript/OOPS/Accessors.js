var Customer2 = /** @class */ (function () {
    function Customer2() {
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
var customer2 = new Customer2();
customer2.setName("Abhinov");
console.log(customer2.getName());
customer2.age = 24;
console.log(customer2.age);
