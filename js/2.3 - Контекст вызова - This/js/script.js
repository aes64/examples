console.log("2.3");

function showContext() {
    console.log(this);
}


showContext()
window.showContext()

mama = {
    a: "mama"
};

console.log(mama);
console.log(window.mama === mama);


// Создадим пустой объект
const human = {
    firstName: "Danil",
    age: 30
}

// Присвоим ему функцию showContext в качестве метода объекта
human.test = showContext;

human.test();

// Результат получился иной. Т.е. контекст зависит от того, как именно мы вызываем эту функцию.

// По сути, this это то, что стоит у нас слева от точки, в месте вызова функции.


// Вывод - различные вариации вызова одной и той же функции могут дать нам разный контекст.

contextShower.addEventListener('click', function () {
    console.log("click!");
    console.log(this);
});


// Краткий итог:
// 1. В глобальной области видимости this - window  (по сути это всегда, если она вызвана не как метод) 
// 2. При вызове метода объекта this укажет на этот самый объект
// 3. Внутри слушателя события this указывает на объект, на котором висит слушатель (по сути то же самое что event.currentTarget)
// 4. Если функция вызвана как конструктор, то this становится вновь созданный объект (не проходили)


const human2 = {
    firstName: "Danil",
    age: 30,
    getInfo() {
        console.log(this)
        return "human: " + this.firstName + " -  " + this.age
    }
}

//console.log(human2.getInfo());


// Cоздадим копию метода getInfo "вне" объекта
const testInfo = human2.getInfo; // внимание - не вызываем getInfo, а передаём в переменную тело функции (код)


console.log(testInfo());
// Функция testInfo покажет нам undefined потому что у объекта window нет полей firstName и age.


function callBackCaller(cb) {
    console.log(cb());
}

callBackCaller(human2.getInfo)

console.log(human2.getInfo);
// Если функция вызвана как колбэк, то велика вероятность что произойдет потеря контекста 


// Стрелочные функции работают иначе. Эту часть мы разберем во другом уроке, когда this уже будет вам более знаком.

// Для чего удобнее всего использовать this? Для обращения к экземплярам классов, созданных с помощью ключевого слова New.


// Также вы можете задуматься, как работают все методы массивов, если мы не передаём сам массив в качестве аргумента
// (arr.map(callback) — vs — arr.map(arr, callback))


// New - ключевое слово, которое позволяет создавать нам новые объекты из какого-то "прототипа" (класса)

// Узнаем, где оно используется.


// Классы
// Существует две основных группы методов - методы чтения свойств (геттеры) и методы установки свойств (сеттеры)


class Cookie {
    constructor(color) {
        this.color = color;
        this.getColor()
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
    }
}
