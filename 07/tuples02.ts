// Tuples in TypeScript have their advantages,
// but they also come with some limitations and potential downsides that make them less favorable in certain situations.


// 1. Lack of Readability
let person: [string, number] = ["Alice", 25]; 
// Here the person array's elements do not provide clear information about what each element represents

// 2. Immutability Concerns
let person: [string, number] = ["Alice", 25];
person[1] = 26; 
// Allowed, but it is a bad practice as it leads to unintended modifications

// 3. Type Safety Concerns
let heroContext: [string, number] = ["Superman", 2];
// heroContext.push(true); 
// Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
