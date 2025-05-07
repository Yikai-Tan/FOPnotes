// Define a function #3.1
function fnname(a,b) {
    console.log('this is a function')
    a += 15;
    b += 20
    console.log(a,b)
}
fnname(10,20)

// Parameter Place holder #3.2
function saySomething(x) {
    console.log(`My name is ${x}`)
}
saySomething('John Doe')
saySomething('Andy Tim')

// Function with multiparameters
function sayingSomething(a,b) {
    console.log(`My name is ${a} and I am ${b} years old`)
}
sayingSomething('John Doe', 25)
sayingSomething('Andy Tim', 30)

// Function with default parameters #3.3
function sayedSomething(a='tim', b = 20) {
    console.log(`My name is ${a} and I am ${b} years old`)
}
sayedSomething()
sayedSomething('John Doe', 25) // overriding default parameters

// Function with named parameters #3.4 (enrichment)
function saiedSomething({a='tim', b = 20}) {
    console.log(`My name is ${a} and I am ${b} years old`)
}
saiedSomething({b:25, a:'john doe'}) // overriding default parameters=

/* // Input (does not work cus no library)
let input = require('readline-sync')
let name1 = input.question('Enter your name: ')
console.log(`Hello ${name1}`) */


// this is for a random number between 33 and 55 please remeber the format.
console.log(33+(Math.floor(Math.random()*(55-33+1))))
/* console.log(a+(Math.floor(Math.random()*(b-a+1)))) */ // this is the formula for the random number between two numbers.

function rectangecalculator(w,h){
    let resulta = w*h
    return console.log(`area of the rectangle is ${resulta}`)
}

rectangecalculator(5,10)

// Function returning 2 values #3.5
function swap(n1,n2){
    let temp = n1;
    n1 = n2;
    n2 = temp;
    return [n1,n2];
}
let num1=1,num2=2;
[num1,num2] = swap(num1,num2);
console.log(`num1: ${num1}, num2: ${num2}`)


console.log('false &&5: ', false && 5) // false
console.log('true &&5: ', true && 5) // 5
console.log('false ||2: ', false || 2) // 2
console.log('5 ||2: ', 5 || 2) // 5
console.log('1 ||2: ', 1 || 2) // 1

console.log(5&&4&&3)
