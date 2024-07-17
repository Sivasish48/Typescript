// What is TypeScript?
// TypeScript is a syntactic superset of JavaScript which adds static typing.

// This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

// TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.

// Why should I use TypeScript?
// JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

// In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

// TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

// For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

// TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.



//exmple of a function


function add(a:number,b:number):number{
    return a+b
  }
  
  let c = add(34,5)
  console.log(c)


  //let us create a calculator which takes 3 arguments

function calculator(a:number,b:number, calcType:string ){
    if (calcType === "sum" || calcType ==="add"){
      return a+b
    } else if(calcType === "mul"){
      return a*b
    }else if(calcType === "sub"){
      return a-b
    }else if (calcType === "div"){
      return a/b
    }else{
      return calcType + "is not a calculation operation."
    }
  }
  
  let answer = calculator(56,7,"div")
  console.log(answer)


  // but this is not the actuall way to do this , the right way is to define the string when the defining the typr string 



function calculators(
     a:number,
     b:number,
     calcType: "sum" | "add" | "mul" | "sub" | "div" 
    ):number{
    if (calcType === "sum" || calcType ==="add"){
      return a+b
    }if(calcType === "mul"){
      return a*b
    }if(calcType === "sub"){
      return a-b
    }if (calcType === "div"){
      return a/b
    }
    return -1
  }
  let answers = calculators(56,45,"div")
  console.log(answers)

  //NOTE 
  // Typescript never uses a isolated exection environment. or never runs the code .
  // it converts the code into a js code by making sure the types are write.
  // so the code is not executed untill the types are written.
 // the typescript throws a compilation errors if the types are not written.