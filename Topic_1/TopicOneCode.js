// Introduction to console.log
console.log("Introduction to console.log");

// Escape Sequences #ES (1.1)
// \n is a new line
console.log("Hello,\nWorld!");
// \t is a tab
console.log("Hello,\tWorld!");
// \b is a backspace (Ignores the ' ' character)
console.log("Hello,\bWorld!");
// \r carrige return (Slaps everything after it right to the front of the ''print'' and overwrites the letters there.)
console.log("Hello,\rWorld!");

// Like python '' and "" are interchangable for indication for str (there is also backticks ` ` in js located above the tab button)
// Do note \' or \" will also work to print them in the respective ones\
// '='.repeat(50) can repeat str (Repeats = 50 times)

console.log(`'\\ \\'`) //Take note of the `` in the console.log()


// ----------------------------------- Lesson 2 -----------------------------------


// Use let to declare vairables rather than var (Var was dropped by Javascript devs)
let area = 10; // Single Line varible declaration n innitialization
console.log(area);

//multiLine var declaration and innitialization
let cookie;
cookie = 15; // = use assign area for variable like python
console.log(cookie);

// Multi Var declaration in a single let
let rice = 10, muffin = 15, cake = 20; // Use , to declare multi vars in a single line
console.log(rice, muffin, cake);

// Memorise Slide 11 from here --> https://splms.polite.edu.sg/d2l/le/enhancedSequenceViewer/638531?url=https%3A%2F%2Fb988e89b-eb2c-401a-999a-94b943da0008.sequences.api.brightspace.com%2F638531%2Factivity%2F10267799%3FfilterOnDatesAndDepth%3D1
// Refer to #Identifiers (02.1) in ./some notes from Lesson 1.txt

// #V.RI(2.11)
// When changing a value in the var it is called Re-Initialize
let boxcontainer = 12;
boxcontainer = 20; // Re-Initialize the value of boxcontainer to 20
console.log('The box contains',boxcontainer,'items.'); //using comma to will not concatenate the str and var unlike python
console.log('The box contains' + boxcontainer + 'items.'); // using + will concatenate the str and var like python

// #V.RI(2.12)
// Using let (Local)
var count = 0; 

while (count < 5) {
    let i = 0; // This will not work as the i in the for loop is local to the for loop and cannot be used outside of it
    console.log(i); // This will throw an error as i is not defined outside of the for loop
    count++;
}
/* console.log(i); // This will throw an error as i is not defined outside of the for loop */
// above will error out due to i not being defined outside bounds {}

count = 0;

// Using var (Global)
while (count < 5) {
    var t = 0; // This will work as the t in the for loop is global and can be used outside of it
    console.log(t); // This will print 0 as t is defined outside of the for loop
    count++;
}
console.log(t); // This will print 0 as t is defined outside of the for loop



