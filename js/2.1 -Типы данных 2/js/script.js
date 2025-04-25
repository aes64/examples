console.log("2.1")

// Копирование объектов
// Переменная, которой присвоен объект, хранит не сам объект, а его «адрес в памяти» – другими словами, «ссылку» на него.
// При копировании переменной объекта копируется ссылка, но сам объект не дублируется.

let user = { name: "John" };
let admin = user; // копируется ссылка

admin.name = 'Peter'; // изменено по ссылке из переменной "admin"
console.log(user.name); // 'Pete', изменения видны по ссылке из переменной "user"



// Сравнение по ссылке
// Два объекта равны только в том случае, если это один и тот же объект.
// Например, здесь a и b ссылаются на один и тот же объект, поэтому они равны:

let a = {};
let b = a; // копирование по ссылке

console.log(a == b); // true, обе переменные ссылаются на один и тот же объект
console.log(a === b); // true

// И здесь два независимых объекта не равны, даже если они выглядят одинаково (оба пусты). Причем даже если значения свойств объектов будет одинаковым, то мы все равно в обоих случаях получим false.

let a2 = {};
let b2 = {}; // два независимых объекта

console.log(a2 == b2); // false


// В JavaScript объекты имеют ссылочный тип. Два отдельных объекта никогда не будут равными, даже если они имеют равный набор свойств. Только сравнение двух ссылок на один и тот же объект вернёт true.

// Объекты присваиваются и копируются по ссылке. Другими словами, переменная хранит не «значение объекта», а «ссылку» (адрес в памяти) на это значение. Таким образом, копирование такой переменной или передача её в качестве аргумента функции копирует эту ссылку, а не сам объект.


// Пример с передачей объекта как аргумента

const human = {
    name: "Danil",
    age: 33
}

function changeName(obj, newName) {
    // obj = 0x7hc92;
    obj.name = newName;
}

changeName(human, "Serg");

console.log(human);

let myAge = 30;


function changeAge(age, number) {
    // age = 30
    age = number;
}

changeAge(myAge, 10);

console.log(myAge);

let newAge = myAge;
newAge = 20;

console.log(myAge);

// Callback

window.addEventListener('load', changeAge)

// [1, 3, 7].forEach(function () {

// })

function myMap(arr, fn) {
    let outcome = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        outcome.push(fn(arr[i], i))
    }
    return outcome
}

let result = myMap([1, 3, 7], function (el, i) {
    return el * 2
})


function mapLooger(el, i, arr) {
    console.log(el);
}
console.log(result)


myMap([2, 8], mapLooger);

// IIFE - imidiatly invoked function expression

// 1. ()()
(function () {
    console.log('fn iife 1');
})();


// 2. (())
(function () {
    console.log('fn iife 2');
}())
