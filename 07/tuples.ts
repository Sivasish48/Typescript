// In TypeScript, tuples are a special type of array that allows you to specify the exact types of elements at specific positions. 
//Tuples enable you to create an array with a fixed number of elements, each having a specific type.
// This is useful for representing a collection of related values with different types.

let myt: [string,number] = ["hello",1];

let persons: [string, number];
persons = ["Alic", 25]; // Valid
persons = [25, "Alic"]; // Error: Type 'number' is not assignable to type 'string'.

// The person tuple must have a string as the first element and a number as the second element.


// ou can access and modify the elements of a tuple using array indexing.

let person: [string, number] = ["Alice", 25];

let name: string = person[0]; // "Alice"
let age: number = person[1];   // 25

person[1] = 26; // Valid
person[0] = "Bob"; // Valid



// Adding optional element is true as well

let person: [string, number, string?] = ["Alice", 25];

person = ["Alice", 25, "Engineer"]; // Valid
person = ["Alice", 25]; // Also valid



// tuples wwith rest elements

let list: [number, ...string[]] = [1, "Alice", "Bob", "Charlie"];

console.log(list[0]); // 1
console.log(list[1]); // "Alice"
console.log(list[2]); // "Bob"


