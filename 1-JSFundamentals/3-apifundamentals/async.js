//SYTNTAX: async is used to make a function asynchronous, It unlocks the use of await.
//Using await in any other case will cause an error

async function myFn() {
    //await
}

const myFn = async () => {
    //await
}

//ASYNC functions are just normal functions that always return a promise

async function fn() {
    return 'hello';
}

fn().then(console.log)

async function foo() {
    throw Error(('This is a mistake'))
}
//.catch is for when things are intended to catch errors, .then is used for the functioning side
foo().catch(console.log);

//Await: async functions pause at each await expression

fetch('https://random.dog/woof.json')
    .then(response => response.json)
    .then(json => console.log(json))
    .catch(error => console.log(error));

const request = async () => {
    const response = await fetch('hhtps://randomdog/woof.json')
    const json = await response.json();
    console.log(json);
}

request();