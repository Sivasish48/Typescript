// Array Notation in TypeScript and Type Inference for Return Types

//TypeScript offers clear and concise ways to define arrays and can also infer return types of functions, making your code more robust and readable.

// You can define arrays in TypeScript using two common notations:


//Type followed by square brackets:

const Num:number[] = [1,2,3,4,5,6]

// Array generic type:

let Numb2 : Array<number> = [1,2,3,4,5,6]



// ypeScript can automatically infer the return type of a function based on its return statements, which can simplify your code.
function getFirstElement(arr: string[]): string {
    return arr[0];
  }
  
  const fruits = ['apple', 'banana', 'cherry'];
  const firstFruit = getFirstElement(fruits);
  
  console.log(firstFruit); // Output: apple