class Customer2 {
  
    private name: string = "";    

    // Getters / Setters just like JAVA
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }




    // SPECIAL Accessors in Typescript (available only after --target es5)
    private _age: number = 0;

    public get age(): number {
        return this._age;
    }

    public set age(age: number) {
        this._age = age;
    }

}


let customer2 = new Customer2();
customer2.setName("Abhinov")
console.log(customer2.getName());

customer2.age = 24;
console.log(customer2.age);

