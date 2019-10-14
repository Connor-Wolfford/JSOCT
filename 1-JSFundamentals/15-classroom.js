// let example = 'word';
let example = 3;
// let example = true;


if (typeof example === 'string') {
    console.log('string')
}else if (typeof example === 'number') {
    console.log('This is a number')
}else if (typeof example === 'boolean') {
    console.log('boolean')
}


// (string === typeof(string)) ? console.log('String') : (number === typeof(number)) ? console.log('Number') : (booboo === typeof(boolean)) ? console.log('Boolean') : console.log('Not a datatype im looking for.')
// console.log(typeof(string))
// console.log(typeof(number))
// console.log(typeof(boolean))

/*
* Challenge (Strings):
Pig Latin:
Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.
If able to do so, return the value into another variable and print that variable
What is Pig Latin?
* If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
* If the word begins with a vowel, simply add an 'ay' at the end of the word
*/

let vowels = 'aeiouAEIOU'

function pig (string) {
    if (string.charAt(0) == vowels.length) {
        console.log(string, + 'ay'))
    }else{
        console.log(string)
    }
}

pig('')

/*
Challenge (Arrays):
Color List:
Create a function that can take in arrays.
Create an array of colors
Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)
In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.
Not to make it too hard on yourself, you can stop the count at ten
*/
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'rassmatazz', 'grey', 'neon carrot', 'white'];
let suffArr = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];


function colorFunc (colorArray, suffixArray) {
    colorArray.forEach((element, index) => {
    console.log(`${index +1}${suffixArray[index]} is ${element}`)
    })
}

colorFunc(colors, suffArr);