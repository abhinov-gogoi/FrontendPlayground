class Customer {
    firstName: string;
    lastName: string;
    constructor(first_name : string, last_name: string) {
        this.firstName = first_name;
        this.lastName = last_name;
    }
}

// lets create an instance
let myCustomer = new Customer("Abhinov", "Gogoi")
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);