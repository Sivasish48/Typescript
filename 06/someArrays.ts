// TypeScript supports multi-dimensional arrays as well.

let heros: string[][]=[
    ["Batman", "Robin"],
    ["Superman", "Clark Kent"]
]


// let us understand the Unions in typescript.


// In TypeScript, unions allow a variable to hold values of different types. This is useful for functions, variables, and parameters that can accept multiple types, enhancing flexibility while maintaining type safety.

let value: string | number;
value = "hello"; // valid
value = 42;      // valid
value = true;    // Error: Type 'boolean' is not assignable to type 'string | number'.


// we can achieve that when using type

type User ={
    name:string,
    age:number
}

type Admin={
    username:string,
    isActive:boolean
}

let person:User | Admin = {
    name:"Rahul",
    age:25
}
person = {
    username:"Rahul",
    isActive:true
}

//union in function.
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return `String: ${value}`;
    } else {
        return `Number: ${value}`;
    }
}

console.log(formatValue("hello")); // Output: String: hello
console.log(formatValue(42));      // Output: Number: 42


//union in arrays.

let dc : string[] | number[] = [1,2,3,4,5,6,7,8,9,10];

dc = ["superman","batman","robin","superman","batman"];

// but when you want to have the array to hold multiple types , we can achieve this by this below

let superheroToto: (string | number | boolean )[] = ["Superman", true, 42, false];