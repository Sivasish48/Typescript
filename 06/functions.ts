// In TypeScript, the never type represents values that never occur. This type is often used to indicate that a function never returns (like functions that throw an error or have an infinite loop) or to perform exhaustive type checking in error handling.

function showErr(msg:string):never{
    throw new Error(msg);
}
// When you have a function that always throws an error, it can be typed with never, indicating that it never successfully returns a value.
