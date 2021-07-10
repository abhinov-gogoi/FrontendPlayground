// ERROR -> Accessors are only available when targeting ECMAScript 5 and higher

// use --target es5 compiler flag while compiling (tsc --target es5 Accessors.ts)
// OR we can put all compiler flags in tsconfig file

// tsc --init generates the tsconfig.json file














class Customer2 {
    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
    }
    
    // Getters / Setters just like JAVA
    private name: string;    

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    // SPECIAL Accessors in Typescript (available only after --target es5)
    private _age: number;


    public get age(): number {
        return this._age;
    }

    public set age(age: number) {
        this._age = age;
    }

}


let customer2 = new Customer2("John Doe", 33);
customer2.setName("Abhinov")
console.log(customer2.getName());

customer2.age = 24;
console.log(customer2.age);

