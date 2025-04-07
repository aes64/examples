console.log("1.1")

//обьект, function, array
//строка, число, boolean
//андефайнд, NuN, null,

// Undefined
// Значение не известно, но может быть известно в будущем
let score;

// Null
// Отсутствие значения (результата)
score = null;


// NaN - not a number
const name2 = NaN;


// Array - важен порядок и кол-во элементов. Не важны имена ключей
// Массив - множество, группа, список

const cities = ["Москва", "Краснодар", "Ростов"];
console.log(cities);

// Object - важны имена ключей. Не важны кол-во ключей и их порядок
// Описание одной сущности
const cities2 = {
    3: "Ростов",
    1: "Москва",
    2: "Краснодар",
};
console.log(cities2);

const some1 = ['green', 120, 1.6, false];
const some2 = {
    color: 'green',
    horsePower: 120,
    engine: 1.6,
    isBroken: false
};
const some3 = {
    color: 'green',
    radius: 120,
    lineWidth: 1.6,
    isFilled: false
};




function counter(a, b) {
    return a + b
}

counter(2, 3);