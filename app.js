// var PI = 3.14;
// PI = 42; // stop me from doing this!

const PI = 3.14;

PI = 42;

//app.js:6 Uncaught TypeError: Assignment to constant variable.

//quiz
// What is the difference between var and let?

//A: var is the old way of doing things. Unlike let var does  variable hoisting, and 
//var becomes a property of the window object. Scope is a major difference, let 
//operates in the block scope, while var doesn't care - for eg within a function you
//have access to var inside the functional scope regardless if it's nested in a 
//conditional for eg. Also let cannot be redeclared but var can.  

// What is the difference between var and const?

//A: Pretty much the same differences const like let is not applied to the window
//object, it can't be hoisted. Const cannot be redeclared either. Scope also differs
//between var and const as it does between var and let. 

// What is the difference between let and const?

//A: while let and const both cannot be redeclared, let can be reassigned, however
//const cannot be reassigned. If you try to reassign a constant variable you get an
//error "assignment to constant variable" - let can also be declared without assigning
//it an initial value, while const must be assigned an initial value in order to work

//What is hoisting?

//hoisting is when variables are moved to the top of the scope they are declared in.

