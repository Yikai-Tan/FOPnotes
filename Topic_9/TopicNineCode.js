// array with objects
let myarray = [
    {w:1, h:2},
    {w:3, h:4},
    {w:5, h:6},
]
console.log(myarray) 

//calling specific object in data
console.log(myarray[0].w) // 1

//u can also create array with objects by
let r1 = {w:1, h:2}
let r2 = {w:3, h:4}
let r3 = {w:5, h:6}
let myarray2 = [r1, r2, r3]
console.log(myarray2) // this is the same as the above one but in a different way of creating it.

// ------- doing example -------
let examplearr = [
    {w:1, h:5},
    {w:2, h:5},
    {w:3, h:5},
    {w:4, h:5},
]
function reactarr(examplearr){
    console.log(`Length and width of all rectangles`)
    for (let i =0;i<examplearr.length;i++) {
        console.log(examplearr[i].w,examplearr[i].h)
    }
}
function calculator(examplearr){
    console.log(`area of each rectangle`)
    for (let i =0;i<examplearr.length;i++){
        console.log(examplearr[i].w*examplearr[i].h)
    }
}
reactarr(examplearr)
calculator(examplearr)

/* Checking if something is already in an array */
things = ['apple','orange']
object ={apple:100}
if(things[0] in object){
    console.log(object[things[0]]) /* It will output since its inside */
}
if(things[2] in object){
    console.log(object[things[0]]) /* It will NOT output since its inside */
}
