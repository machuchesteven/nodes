let greetings : string = "Hello, how are you doing";

console.log(greetings);

let mynum  = 6.5

let isLoggedIn = true

console.log(mynum)

function getNumber() : number{
    return 20;
}
function getAny(): any{
    return "Any value";
}
console.log(getNumber());

console.log(getAny());
// doing all above with arrow functions

const getHello  = (): string  =>{
    return  "Hello"
}

console.log(getHello());


const heroes : (any)[] = ["names", 12, "3434", true ]

// defines an object that might be used later


type Movie = {
    name : string
    actor: string
    isReleased: boolean
}

function createMovie(): Movie{
    return {
        name: "Alphonce",
        actor: "Denzel",
        isReleased: true
    }
}

createMovie()

// optional type parameters are as important

type OptionalMovie = {
    name: string
    released: number
    actor?: string // now the actor is optional
}



export {}