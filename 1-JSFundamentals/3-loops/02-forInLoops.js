//Good for iterating over an object

let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1
}

for (item in student) {
    console.log('item =>', item);
    console.log('student[item] =>', student[item])
}