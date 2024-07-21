// Interface
//This defines a Person interface with three properties: name, password, and age and can be changed further.
var firstP = {
    name: "Ramu",
    password: "12345",
    age: 44
};
// firstP is an object that conforms to the Person interface because it includes the required properties.
function profile(user) {
    return "User name is ".concat(user.name, " and the password is ").concat(user.password, " and the age is ").concat(user.age);
}
//The profile function accepts a parameter of type Person. This ensures that any object passed to the function has name, password, and age properties.
var customer = profile(firstP);
console.log(customer);
var Car = /** @class */ (function () {
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
var car1 = new Car("Bmw", "black", 2000);
console.log(car1.CarsStatement());
