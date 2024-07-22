// Interface
// This defines a Person interface with five properties: name, password, age, job, and address.
// The address property is of type Address, which is another interface.
// Create an object that conforms to the Person interface
var firstP = {
    name: "Ramu",
    password: "12345",
    age: 44,
    job: "Developer",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};
// firstP is an object that conforms to the Person interface because it includes the required properties.
// Function using the Person interface
function profile(user) {
    return "User name is ".concat(user.name, ", the password is ").concat(user.password, ", the age is ").concat(user.age, ", the job is ").concat(user.job, ", and the address is ").concat(user.address.street, ", ").concat(user.address.city, ", ").concat(user.address.country);
}
// The profile function accepts a parameter of type Person.
// This ensures that any object passed to the function has name, password, age, job, and address properties.
var customer = profile(firstP);
console.log(customer); // Output: User name is Ramu, the password is 12345, the age is 44, the job is Developer, and the address is 123 Main St, Anytown, India
// The Carsprops interface specifies the structure that any object of type Car should adhere to. It requires:
// A brand property of type string.
// A color property of type string.
// A mileage property of type number.
var Car = /** @class */ (function () {
    // The Car class implements the Carsprops interface. This means:
    // The class has the properties brand, color, and mileage that match the types specified in the interface.
    // The constructor initializes these properties when an instance of the class is created.
    // The CarsStatement method returns a string that describes the car using its properties.
    function Car(brand, color, mileage) {
        this.brand = brand;
        this.color = color;
        this.mileage = mileage;
    }
    Car.prototype.CarsStatement = function () {
        return "".concat(this.brand, " is a famous car company and most popular color is ").concat(this.color, " with a mileage of ").concat(this.mileage, " kmph");
    };
    return Car;
}());
// Create a new instance of the Car class with the brand "Bmw", color "black", and mileage 2000.
var car1 = new Car("Bmw", "black", 2000);
console.log(car1.CarsStatement()); // Output: Bmw is a famous car company and most popular color is black with a mileage of 2000 kmph
// A new instance of the Car class is created with the brand "Bmw", color "black", and mileage 2000.
// The CarsStatement method is called on this instance, and its result is logged to the console.
