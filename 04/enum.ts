// enums

// Enums (short for enumerations) in TypeScript are a way to define a set of named constants. 
//They are used to create a collection of related values that can be either numeric or string-based. 
//Enums provide a way to define a type with a limited set of values, making your code more readable and type-safe.


// There are three types of enums in TypeScript:

// Numeric Enums
// -- Numeric enums are the default in TypeScript. The first value is initialized to 0, and each subsequent value is incremented by 1.

enum Direction{
    North, // 0
    South,  // 1
    East,   // 2
    West    // 3
}
 

let move = Direction.East;

console.log(move); // 2

// we can also assign custom values to enums

enum AnmlEnum {
    One = 1,
    Two , // 2
    Three, // 3
}
console.log(AnmlEnum.One); // 1
console.log(AnmlEnum.Two); // 2
console.log(AnmlEnum.Three); // 3

// Or assign each member

enum apples{
    red = 44,
    green = 72,
    yellow = 89
}

console.log(apples.red); // 44
console.log(apples.green); // 72
console.log(apples.yellow); // 89

