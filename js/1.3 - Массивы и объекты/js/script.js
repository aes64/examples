// console.log("1.3")

// const human = {
//     color: 'green',
//     radius: 120,
//     lineWidth: 1.6,
//     isFilled: false,
//     friends: ['Masha', "Petr"],
//     pet: {
//         type: "cat",
//         name: "Sari"
//     },
//     sayHello: function (params) {
//         return "Hello " + params
//     },
//     sayHello2(params) {
//         return "Hello " + params
//     },
// };

// // Метод - это функция, которая лежит внутри объекта

const cities = ["Москва", "Краснодар", "Ростов", "Новгород", "Псков", "Архангельск", "Владивосток", "Астрахань", "Санкт-Петербург", "Владимир", "Самара", "Омск"];


// console.log(human.pet);
// console.log(human.sayHello2());


// human.friends.forEach(item => console.log(item))
// human.friends.hehe = function (params) {
//     console.log('hehehe');
// }
// console.log(human.friends);
// human.friends.hehe();

// // TODO: поговорить про бигО
// // bigO()


// arr.push(items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.unshift(items) – добавляет элементы в начало.
// arr.shift() – извлекает элемент из начала,

// slice - Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end). Оба индекса start и end могут быть отрицательными. В таком случае отсчёт будет осуществляться с конца массива.
const cityCopy = cities.slice();

// concat - Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.

// reverse - Метод arr.reverse меняет порядок элементов в arr на обратный.

// arr.indexOf(item, from) - ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.

// find - ищет один (первый попавшийся) элемент, на котором функция-колбэк вернёт true и первый найденный элемент

// sort(fn) - Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов. Он возвращает отсортированный массив, но обычно возвращаемое значение игнорируется, так как изменяется сам arr.

// forEach - Метод arr.forEach позволяет запускать функцию для каждого элемента массива.

// filter - Синтаксис этого метода схож с find, но filter возвращает массив из всех подходящих элементов

// map - arr.map является одним из наиболее полезных и часто используемых. Он вызывает функцию для каждого элемента массива и возвращает новый массив



// ДЗ - 3:
// 1) Получить средний возраст
// Написать функцию, которая принимает массив и возвращает средний возраст. Массив - [25, 19, 21, 14, 59, 5, 42, 70, 58, 31]
function midAge(ages) {
    let sum = 0;
    ages.forEach((age) => sum = sum + age)

    // 2 вариант
    // for (let i = 0; i < ages.length; i++) {
    //     sum = sum + ages[i]
    // }
    return Math.floor(sum / ages.length)
}
midAge([25, 19, 21, 14, 59, 5, 42, 70, 58, 31])

// 2) Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива. Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b) {
    let outcome = arr.filter(item => item >= a && item <= b);
    return outcome;

    // 2 вариант
    // let filteredArr = [];
    // arr.forEach((item) => {
    //     if (a <= item && item <= b) {
    //         filteredArr.push(item)
    //     }
    // })
    // retrutn filteredArr

    //3 вариант
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] >= a && arr[i] <= b) {
    //         filteredArr.push(arr[i])
    //     }
    // }
    // retrutn filteredArr
}


// 3) Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.
function countIdentic(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in count) {
            //count[arr[i]] = count[arr[i]] + 1
            // count[arr[i]] += 1
            // i++
            // i = i+1
            count[arr[i]]++
        } else {
            count[arr[i]] = 1
        }
    }
    let maxNumber = Object.values(count)[0]
    Object.values(count).forEach((number) => {
        if (maxNumber < number) {
            maxNumber = number
        }
    })
    return maxNumber
}
countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]) // 4 
//countIdentic([15,14,13,19,13,14,14,14,7,9,9]) // 3


// 4) Напишите функцию, которая принимает массив, будет находить максимальное число в массиве
function searchMaxNumber(arr) {
    let maxNumber = arr[0];
    arr.forEach((number) => {
        if (maxNumber < number) {
            maxNumber = number
        }
    })
    // 2 вариант
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] > maxNumber) {
    //         maxNumber = arr[i]
    //     }
    // }
    return maxNumber;
}
// 5) Напишите функцию, которая принимает массив, которая будет находить минимальное число в массиве
function searchMinNumber(arr) {
    let minNumber = arr[0];
    arr.forEach((number) => {
        if (minNumber > number) {
            minNumber = number
        }
    })
    // 2 вариант
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] < minNumber) {
    //         minNumber = arr[i]
    //     }
    // }
    return minNumber;
}
// 6) Напишите функцию, которая принимает массив и два индекса. И, заменяет в массиве два числа по этим индексам.

// [1,4,6,2] => idx1 = 4, idx3 = 2
// [1,2,6,4] => idx1 = 2, idx3 = 4
function swapElems(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b];
    arr[b] = temp
    return arr
}

