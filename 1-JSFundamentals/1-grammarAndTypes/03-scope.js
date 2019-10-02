//Scope
//Scope is where variables are and arent accessible in our code (think baby jail);

var x = 12;

function  doesScope() {
    var x = 33;
    console.log(x)
}
doesScope();
console.log(x)

var y = 12;

console.log(y)

function isScope() {
    y = 33;
    console.log(y)
}
isScope();
console.log(y)

//Use Let