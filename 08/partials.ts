//In TypeScript, partials refer to the use of the Partial utility type, which makes all properties of a given type optional. This is particularly useful when you want to work with objects that might not have all their properties defined.

// let us take an example and imagine we are making a todo ap so A todo type is defined below

type Todo = {
    id:number,
    title:string,
    completed:boolean

}

function updateTodo(todo:Todo, updates:Partial<Todo>){
    return {...todo, ...updates}
}

let todo1 = {
    id:1,
    title:"Buy milk",
    completed:false
}

let update = updateTodo(todo1,{title:"sell milk"})
console.log(update)