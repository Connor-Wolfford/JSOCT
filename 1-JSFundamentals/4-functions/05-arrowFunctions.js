function coffee() {
    console.log('Coffee is good')
}

let coffee = () => {
    console.log('I love coffee');
}

let cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`)
}

cats(1, 0)

let apples = x => console.log(`There are ${x} apples`);
apples(10)

let apples = (x) => { console.log(`There are ${x} apples.`)}
apples(20)