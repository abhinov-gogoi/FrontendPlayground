var Customer = /** @class */ (function () {
    function Customer(first_name, last_name) {
        this.firstName = first_name;
        this.lastName = last_name;
    }
    return Customer;
}());
// lets create an instance
var myCustomer = new Customer("Abhinov", "Gogoi");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
