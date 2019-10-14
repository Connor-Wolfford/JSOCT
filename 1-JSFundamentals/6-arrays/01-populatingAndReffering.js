let list = ['orange', 'banana', 'oreos']

console.log(list[1])

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['John', 'Eric', 'Sam']]

console.log(typeof  students)
console.log(students instanceof Array);
console.log(students[1])
console.log(students[3])

let name = students [6][2]
console.log(`Hello ${name}, how are you today?`)

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// food.push('Cool Beans');
food.splice(1, 1, 'Cookies') 
console.log(food)
        //Position, how many to remove, what to add
food.shift()
food.pop()
food.unshift('Pasta', 'Hamburger')
for (f of food) {
    console.log(f)
}

for (f in food) {
    console.log(f)
}

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
food.forEach(f => {console.log(f)})
food.forEach((f, number) => {console.log(f); console.log(number)})
food.forEach((f, number, array)=>{console.log(f); console.log(number); console.log(array)})

let foodFunction = () => {
    for (f in food){
        console.log(f),
        console.log(food[f]),
        console.log(food)
    }
}

foodFunction()

let movies = ['Mad Max Fury Road', 'Skyfall', 'Clockwork Orange', 'Interstellar', 'Scott Pilgrim VS The World', 'The Grand Budapest Hotel']

movies.push('Pulp Fiction')
movies.splice(1, 1, 'Speed Racer')
movies.forEach(m => {console.log(m)})

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length)

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length)
console.log(colors.toString())
console.log(typeof colors)
console.log(typeof colors.toString())
colors.forEach(color => console.log(color))

let arr = [1, 2, 3, 4, 5]

console.log(arr instanceof Array)
let newArr = arr.reverse()
console.log(newArr.toString())