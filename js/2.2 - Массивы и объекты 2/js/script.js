console.log("2.2");


const objArr = [
    {
        "random": "9",
        "random float": "56.539",
        "bool": "true",
        "date": "1991-03-08",
        "regEx": "hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo to you",
        "enum": "online",
        "firstname": "Jenda",
        "lastname": "Tarrant",
        "city": "Linz",
        "country": "Christmas Island",
        "countryCode": "CA",
        "email uses current data": "Jenda.Tarrant@gmail.com",
        "email from expression": "Jenda.Tarrant@yopmail.com",
    },
    {
        "random": "51",
        "random float": "92.026",
        "bool": "true",
        "date": "1982-03-02",
        "regEx": "hellooooooooooooooooooo to you",
        "enum": "json",
        "firstname": "Merci",
        "lastname": "Thad",
        "city": "Pontianak",
        "country": "Puerto Rico",
        "countryCode": "IE",
        "email uses current data": "Merci.Thad@gmail.com",
        "email from expression": "Merci.Thad@yopmail.com",
    },
    {
        "random": "70",
        "random float": "30.502",
        "bool": "false",
        "date": "1998-01-09",
        "regEx": "helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo world",
        "enum": "json",
        "firstname": "Andree",
        "lastname": "Marisa",
        "city": "Rochester",
        "country": "Guinea",
        "countryCode": "BB",
        "email uses current data": "Andree.Marisa@gmail.com",
        "email from expression": "Andree.Marisa@yopmail.com",
    }
];



// if (objArr.indexOf(myObj) != -1) {
//     console.log('founded');
// } else {
//     console.log('not found');
// }

const cities = ["Москва", "Краснодар", "Ростов", "Новгород", "Псков", "Архангельск", "Владивосток", "Астрахань", "Санкт-Петербург", "Владимир", "Самара", "Омск"];


cities.sayHello = () => console.log('gello');

console.log(cities);


// Инициализация массивов:
var a1 = Array.of(11, 21, 31);// Аналогично инициализации массива var a = [11, 21, 31];
var a2 = Array(6).fill(1);// инициализировать массив из шести элементов и заполнить его единицами


// Методы массивов 2:

// arr.splice() - меняет содержимое массива, удаляя существующие элементы или заменяя их на другие элементы. Он умеет и добавлять в массив новые элементы. Этот метод модифицирует массив. Метод arr.splice(str) – это универсальный «швейцарский нож» для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы.
// arr.splice(start[, deleteCount, elem1, ..., elemN])

// Он изменяет arr начиная с индекса start: удаляет deleteCount элементов и затем вставляет elem1, ..., elemN на их место. Возвращает массив из удалённых элементов

// const splicedArr = cities.splice(2, 3, "City 17", 'City 18')
// console.log(splicedArr)

console.log(cities);



// arr.find() - ищет элементы в массиве по передаваемой ему функции. Если функция возвращает true, то метод возвращает первый найденный элемент. 
// a.find(x => x.id === my_id);

// В примере функция x ищет элемент id, который должен иметь значение my_id. Если он находит my_id в массиве, то возвращает этот элемент. Если элемента нет, то возвращается undefined.

const myCity = 'New-York';

if (cities.indexOf(myCity) != -1) {
    console.log('Город ' + myCity + ' есть в массиве');
} else {
    console.log('Города ' + myCity + ' нет в массиве');
}



// arr.findIndex() - возвращает индекс элемента, если элемента нет, то возвращается undefined.
// Например:
// a.findIndex(x => x.id === my_id); // Поиск элемента массива методом findIndex()



// arr.includes() - этот метод возвращает значение true, если массив содержит определенный элемент, и значение false — если нет.




// arr.every() - проверяет, удовлетворяют ли все элементы массива заданному условию, и возвращает true, если все элементы удовлетворяют условию, и false в противном случае. 

// arr.some() - проверяет, удовлетворяет ли хотя бы один элемент массива заданному условию, и возвращает true, если хотя бы один элемент удовлетворяет условию, и false в противном случае. 


// arr.flat() - Этот метод принимает в качестве аргумента массив массивов и сглаживает вложенные массивы в массив верхнего уровня. Обратите внимание, что этот метод работает только для одного уровня.

const myAwesomeArray = [[1, 2], [3, 4], 5]
myAwesomeArray.flat() //-------> Output : [1, 2, 3, 4, 5]


// string.split() - разделяет строку на подстроки и возвращает массив, содержащий эти подстроки. Подстроки могут быть разделены заданным разделителем, который передается в качестве аргумента метода split().


// arr.join() - объединяет элементы массива в строку, разделяя их заданным разделителем, который также передается в качестве аргумента метода join(). По умолчанию в качестве разделителя используется запятая.



// arr.reduce() - Метод reduce() применяют, чтобы вернуть какое-либо единое значение массива и совершить с ним любую операцию.
// Возвращенное значение будет зависеть от операций с аргументами, которые мы передали функции. Вот эти аргументы:
// previousValue — предыдущее значение. (accumulator, acc)
// currentValue — текущее значение.
// index — индекс текущего элемента массива.
// array — сам массив.


const sumArr = [1, 3, 7, 12].reduce(function (acc, elem) {
    //console.log(acc, elem);
    acc = acc + elem;
    return acc;
}, 0);

const shortCityNames = cities.reduce(function (acc, city) {
    console.log(acc)
    if (city.length <= 6) {
        acc.push(city)
    }
    return acc;

}, [])

console.log(shortCityNames)

// Array.from() - это статический метод, позволяющий создать новый массив из массиво-подобных и итерабельных объектов (строка). Метод полезен при работе с DOM.


// Немного о «length»
// Свойство length — это наибольший индекс массива плюс один. С помощью этого свойства можно уменьшить длину массива.

// Например:
// Уменьшаем массив arr до двух элементов. Уменьшение массива происходит безвозвратно. Если снова обратиться к индексу [3], то получим undefined

var arr = [1, 2, 3, 4, 5];
arr.length = 2; // укорачиваем до двух элементов
console.log(arr); // Array [ 1, 2 ]

arr.length = 5; // возвращаем length 
console.log(arr);//[ 1, 2, <3 empty slots> ]
console.log(arr[3]); // undefined: как видим, значения не восстановились


//    Если мы можем уменьшить количество элементов в массиве, то можем и полностью очистить массив с помощью свойства arr.length=0.

// Например:
// Очищением массива с помощью свойства arr.length=0

var arrClear = [1, 2, 3, 4, 5];
arrClear.length = 0;
console.log(arrClear); // Array []

// Метод new Array()
// Массив можно задать методом new Array().

// Например:

var arrN = new Array("Кастрюля", "Сковородка", "Ложка"); // Инициализация массива методом new Array()

console.log(arrN);//Array(3) [ "Кастрюля", "Сковородка", "Ложка" ]


// Ключевое слово new используется в JavaScript для создания новых объектов из конструктора. Конструктор - это функция, которая используется для создания объекта.

// const newObj = new Constructor();
