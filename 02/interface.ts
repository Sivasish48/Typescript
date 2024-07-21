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


  // typescript interface
  // Using interfaces in TypeScript classes allows you to define contracts for the shape of an object, which the class must adhere to. 
  // This ensures that the class implements all the properties and methods specified in the interface. 

  // let us have an example

  interface Carsprops{
    brand:string,
    color:string,
    mileage:number
     }

     // here above

// The Carsprops interface specifies the structure that any object of type Car should adhere to. It requires:

// A brand property of type string.
// A color property of type string.
// A mileage property of type number.

    
 class Car implements Carsprops{
   brand:string;
   color:string;
   mileage:number;


//    The Car class implements the Carsprops interface. This means:

// The class has the properties brand, color, and mileage that match the types specified in the interface.
// The constructor initializes these properties when an instance of the class is created.
// The CarsStatement method returns a string that describes the car using its properties.

   constructor(
    brand:string,
    color:string,
    mileage:number
   ){
      this.brand = brand;
      this.color = color;
      this.mileage = mileage;
   }

   CarsStatement(){
    return `${this.brand} is a famous car company and most popular color is ${this.color} with a mileage of ${this.mileage} kmph`
  
   }
   
 }

 const car1 = new Car ("Bmw","black",2000)
 console.log(car1.CarsStatement())

//  A new instance of the Car class is created with the brand "Bmw", color "black", and mileage 2000.
// The CarsStatement method is called on this instance, and its result is logged to the console.