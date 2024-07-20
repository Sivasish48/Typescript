// Interface

// n TypeScript, an interface is a way to define the structure of an object. It acts as a contract that specifies what properties and methods an object should have.
// This helps ensure that objects conform to a particular shape, which improves code quality and maintainability.


// An interface is defined using the keyword interface, followed by the name of the interface and a list of its properties and methods.

//example

interface Person{
    name:string,
    password:string,
    age:number
  }
  //This defines a Person interface with three properties: name, password, and age and can be changed further.
  
  const firstP = {
    name:"Ramu",
    password:"12345",
    age:44
  }
  // firstP is an object that conforms to the Person interface because it includes the required properties.


  
  function profile(user:Person){
    return `User name is ${user.name} and the password is ${user.password} and the age is ${user.age}`
  }
  //The profile function accepts a parameter of type Person. This ensures that any object passed to the function has name, password, and age properties.

  
  
  let customer = profile(firstP)
  console.log(customer)