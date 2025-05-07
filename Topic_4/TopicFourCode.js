
//#4.1
let i = 1
if (i%2==0){
    console.log('even')
}
else{
    console.log('odd')
}

// or this also works too
if(i%2==0)
    console.log('even')
else
    console.log('odd')

// if in if in if (Nested if) #4.2
let a=1,b=2,c=3;
if (a!=b){
    if(a==c){
        console.log('a is equal to c')
    }
}

let d=10;
if (d=11){
    console.log('d is equal to 11')
}
else if (d=12){
    console.log('d is equal to 12')
}
else{
    console.log('d is not equal to 11 or 12')
}

// Switch statement #4.3
let x = 1
switch (x) {
    case 1:
        console.log('x is 1')
        break
    case 2:
        console.log('x is 2')
        break
    case 3:
        console.log('x is 3')
        break
    default:
        console.log('x is not 1,2 or 3')
}

//switch statemt practice

let e=1,f=0;
switch(e){
    case 1:
        f+=5
        break
    case 2:
        f+=10
        break
    case 3:
        f+=16
        break
    case 4:
        f+=34
        break
}
console.log(`the value of f is ${f}`)