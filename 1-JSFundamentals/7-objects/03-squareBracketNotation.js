// let garden = {
//     vegetable: 'Zucchini',
//     flower: 'sun flower',
//     fruit: 'grape',
//     water: true,
//     sun: true,
//     size: 10
// };

// console.log(garden.vegetable)

// let x = 'vegetable',

// console.log(garden.x, garden[x])

// let baking = {};
// baking.zucchini = 'Better make some bread'
// baking['zucchini'] = 'better make some bread'
// console.log(baking)

// console.log(baking[garden['vegetable']])
console.log(baking)// { zucchini: 'better make some bread}
console.log(garden['vegetable'])//'zucchini
console.log(baking[garden['vegetable']])//'better make some bread'
console.log(baking['zucchini'])//'better make some bread'

let garden = {
    vegetable: 'Zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

let randomVariableName = 'water'

Object.keys(garden).forEach(g => {
    // console.log(g)
    if (g === randomVariableName) {
        console.log(garden[randomVariableName])
    }
})