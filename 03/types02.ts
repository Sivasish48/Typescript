// let us understand how can type be used with union types .
// Union types allow a variable to hold values of different types. It's like saying a variable can be either one type or another.
type PlayerId = string | number;

let userId : PlayerId;
userId = 1234; // valid
userId = '1234'; // valid 
userid = "Suvam1234";  // invalid
userId = true; // invalid



// let us understand how can type be used with intersection types .
//Intersection types combine multiple types into one. It's like saying a variable must have all the properties of the combined types.

type user = {
    name:string,
    age:number
}
type active = {
    isActive:boolean
}

type userActive = user & active;

const theUser : userActive = {
    name:"Suvam",
    age:12,
    isActive:true
}

console.log(theUser); // type user = {
    name:string,
    age:number
}
type active = {
    isActive:boolean
}

type userActive = user & active;

const theUser : userActive = {
    name:"Suvam",
    age:12,
    isActive:true
}

console.log(theUser);
// type user = {
    name:string,
    age:number
}
type active = {
    isActive:boolean
}

type userActive = user & active;

const theUser : userActive = {
    name:"Suvam",
    age:12,
    isActive:true
}

console.log(theUser);
// type user = {
    name:string,
    age:number
}
type active = {
    isActive:boolean
}

type userActive = user & active;

const theUser : userActive = {
    name:"Suvam",
    age:12,
    isActive:true
}

console.log(theUser);
// { name: 'Suvam', age: 12, isActive: true }
