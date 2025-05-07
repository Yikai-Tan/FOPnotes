// #V.RI(1.1)
// Using const (Constant)
const pi = 3.14; // This will work as pi is a constant and cannot be changed
/* pi = 3.14159; // This will throw an error as pi is a constant and cannot be changed */
console.log(pi); // This will print 3.14 as pi is a constant and cannot be changed

// #2.21
let intTest = 10 + 2;
let strTest = 'hello' + 'world';
console.log(intTest,strTest);

// #2.3
// String
let stringtest = 'Hello World'
console.log(typeof(stringtest))

// Number
let numbertest = 10.2;
console.log(typeof(numbertest))

// Boolean
let booleantest = true;
console.log(typeof(booleantest))

// Undefined
let undefinedtest;
console.log(typeof(undefinedtest))

// Null
let nulltest = null;
console.log(typeof(nulltest))

// Symbol
const symboltest = Symbol('hello');
const symboltest2 = Symbol('hello');
console.log(symboltest === symboltest2); // false as symbol adds uid

//Shorthand Operators (Like in python +=, -=, *=, /=, %=, **=)
let x = 10;
x+=15; //is the same as x = x + 15
console.log(x) 
//works the same for the rest of the operators. check #2.2


//Increment and Decrement Operators #2.3

//Increase after it prints the var (Post Increment)
let inc=10;
console.log(inc,inc++,inc);

//Decrease after it prints (Post Decrement)
let dec=10;
console.log(dec,dec--,dec);

//Increase before it prints the var (Pre Increment)
let incdec=10;
console.log(incdec,++incdec,incdec--);

//Decrease before it prints the var (Pre Decrement)
let decinc=10;
console.log(decinc,--decinc,decinc);

// visulisation of console.log(inc,inc++,inc);
inc = 10
console.log(inc)
inc+=1
console.log(inc)
console.log(inc)

let a=1,b=2,c=3
a=++b+c++
console.log(a,b,c) // 6 3 4

//Logic Gates for js #2.4
console.log('true n true',true && true) // and gate
console.log((3>0)&&(10>0)) // and gate
console.log('true or false',true || false) // or gate
console.log((3>0)||(10<0)) // or gate
console.log(true!=false) // not gate
console.log(3!=2)// not gate

console.log(true||true&&!(false))
console.log(false||false&&!(true))

//Typecasting
let str ="10";
console.log(typeof(str),str)

let num = 100;
console.log(typeof(num),num)

//Math Module
num1 = 10.123456789
console.log(Math.round(1.115)) // round to nearest int
console.log(Math.floor(1.115)) // round to the floor
console.log(Math.ceil(1.115)) // round to the ceiling
console.log(num1.toFixed(2)) // round to 2 decimal places
console.log(num1.toPrecision(4)) // 4SF
console.log(Math.trunc(3.6)) //remove decimal part
console.log(Math.abs(-10)) // absolute value
console.log(Math.sqrt(128)) // square root
console.log(Math.pow(2,3)) // power of 2^3
let testing ="5.1231123123123123123"
console.log(typeof(parseInt(testing)),parseInt(testing))


// -------- Sandbox -----------
console.log(!(!(-3<2))||(4!=2)&&!(false))
console.log(4+"hi"+(-2)+"4") // 4hi-24
