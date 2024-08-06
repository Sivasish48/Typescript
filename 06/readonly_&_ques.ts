// The readonly modifier is used to mark properties as immutable. Once a property is declared with readonly, its value cannot be changed after the initial assignment. 
//This is helpful for creating constants or ensuring that certain values do not change throughout the program.

type validCard = {

    readonly name:string;
    creditScore:number;
    isMember:boolean;
    creditLimit:number;
    readonly _id:number;

}

let customers :validCard= {
    name:"John Doe",
    creditScore:800,
    isMember:true,
    creditLimit:5000,
    _id:1
}

customers.name = "Sivasish"; // This is allowed
customers.creditScore = 1000; // This is allowed
customers._id = 2; // This is not allowed

// question 
// The question mark (?) is used to indicate that a property is optional. When a property is marked as optional, it means that it may or may not be present on the object.



