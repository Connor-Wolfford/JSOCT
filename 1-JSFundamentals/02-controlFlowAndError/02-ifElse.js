let weather = 75;

if(weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No need for a jacket!');
};

let name = 'Inigo Montoya';

if (name === 'Inigo Montoya') {
    console.log('Hello, my name is', name, 'You killed my father, prepare to die.')
}else{
    console.log('Hello, is your name', name, '? I hope I did not kill your father, I am not ready to die.')
}



// console.log(name.slice(0))
let name = 'aUTuMN';

if (name.charAt(0) == name.charAt(0).toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase()
    console.log(firstLetter)
}else{
    let otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters)
}

let age = 26;
let a = 'Yay! You can rent a car!'
let b = 'Knock back as much booze as you possibly can!'
let c = 'You can vote!'
let d = 'Sorry, but there isnt a single thing on this planet you can do.'
if (age >= 25) {
    console.log(a,b,c)
}else if (age >= 21) {
    console.log(b,c)
}else if (age >= 18) {
    console.log(c)
}else    (age <= 17) {
    console.log(d)
}
