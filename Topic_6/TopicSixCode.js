let animalList = [('Leopard', 12, 'Puma', 15,"corn"), ('Lion', 20, 'Tiger', 25), ('Elephant', 30, 'Giraffe', 35)];
console.log(animalList[0])

// or arry is 

let animallisttwo = ['Leopard', 12, 'Puma', 15,"corn"]

//this just prints the elements in the array one by one
for (let x =0; x < animallisttwo.length; x++){
    console.log(animallisttwo[x])
}


//this use push to add items to array like list.append in python
animallisttwo.push(`cow`)

console.log(animallisttwo)

//to remove elements use list pop
animallisttwo.pop()
// cannot define which one to pop only pop the last one.
console.log(animallisttwo)