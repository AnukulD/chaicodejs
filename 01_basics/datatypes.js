
//  Primitive
// JS is dynamically typed language
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  // type object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//stack(primitive),heap(non-primitive)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne;
userTwo.email="addewa.com"  // primitive m change nai hota par yha ho jaega
console.log(userOne.email)
