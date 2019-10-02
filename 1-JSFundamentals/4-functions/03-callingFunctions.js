function hi() {
    console.log('Hello')
    return 'HI';
}
hi()
console.log(hi())

// number()

function number() {
    for (let i = 0; i <= 10; i++) {
        console.log(i)
    }
}

number();

let arr = ['This', 'Is', 'Really', 'Cool'];

function words() {
    for (word of arr) {
        console.log(word)
    }
}

words()