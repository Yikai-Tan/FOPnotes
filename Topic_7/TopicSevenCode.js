/* let x=0
while (x < 5){
    console.log("Hello, World!");
    x += 1
    
}

let y = null
while (true){
    console.log("Hello, World!");
    y += 1
    if (y > 5){
        break
    }
} */

// dooooo #7.1 (Out of syllabus)
let z=0
do{
    console.log("Hello, World!");
    z += 1
} while (z >5)

// NESTED LOOPS #7.2 Like python. works lke nested if else statement
for (let i = 0; i < 5; i++){
    console.log('*')
    for (let j = 0; j < 5; j++){
        console.log(`i = ${i}, j = ${j}`)
    }
    console.log('*')
}