// Object Properties (just like dictionaries in Python)
let car = {maker : "fiat", model : "punto", year : 2005};
console.log(car.maker); // Dot notation
console.log(car["year"]); // Bracket notation

//object properties exercies
let circle1 = {radius:10},circle2 = {radius:25};circle3={radius:125};
console.log((Math.PI*((circle1.radius)**2)).toFixed(2))
console.log((Math.PI*((circle2.radius)**2)).toFixed(2))
console.log((Math.PI*((circle3.radius)**2)).toFixed(2))

console.log(`The total radii of the 3 circles are ${circle1["radius"]+circle2["radius"]+circle3["radius"]}`)

// Deleting the obj from the "dictionary"
delete car.maker
console.log(car) // prints the model and year only. the maker was deleted.

// Another exercise
let person={
    firstname :"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
}

console.log(person.firstname)
/* 
Ans : The object variable name is person
Ans : they are known as property names or properties.
Ans : they are known as value*/

console.log(`Name is: ${person.firstname+' '+person.lastname}`)
console.log(`${person.firstname+' '+person.lastname} is ${person.age} years old now`)
console.log(`${person.firstname} will reach ${person.age+10} in 10 years time`)
if (person.age>=50){
    console.log(`${person.firstname} is eligible for the senior movie ticket`)
}
delete person.eyecolor
person.height = 1.75 // this one to add stuff

// function in the object e.g #8.2
let things ={
    height : 100,
    weight : 200,
    namer : function(){
        return this.height + this.weight // TAKE NOTE this refers to the object itself
    }
}
console.log(things.namer())