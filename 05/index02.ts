// Generics in TypeScript

//TypeScript offers a powerful feature called generics, which allows you to create reusable components that can work with different types.

//Generics are a way to define a type that can be used with any other type.


function first<T> (arr:T[]):T{
    return arr[0]
}

// here the above is the generic type function
// The function first is defined with a generic type T. which can be anytype
// arr: T[] means that arr is an array of type T.

let theArr = ["3scf",'cdc','aadw']
// then the array is initialized with string.

console.log(first(theArr)) // Output: 3scf





// ANother example with number type generic function 

const First = <T>(arr:T[]):T=>{
    return arr[0]
}
const theAr = [23,45,67,89]
console.log(First(theAr)) // Output: 23


//  another example by swapping the elements of an array

function Swapping<T>(a:T,b:T):[T,T]{
  return [b,a]
}

console.log(Swapping(43,77)) // Output: [77, 43]



// let us take an example with multiple but mixed types 

function swapping<T,U>(a:T,b:U):[U,T]{
    return [b,a]
  }
  
  console.log(swapping(43,"asdd")) // Output: ["asdd", 43]
