console.log("1.4")



// ДОМ-узлы бывают двух типов - текстовые узлы и элементы
// Document - глобальный объект

// Поиск элемента:
//document.querySelector('a') - поиск элемента.Возвращает специальный объект, который описывает элемент на странице
const el = document.querySelector('a');

const elems = document.querySelectorAll('a');

elems.forEach(function (elem) {
    console.log(elem); // N == arr.length
})

// Изменение элемента

// - стили
el.style.color = 'red';
el.style.fontSize = '30px';

// Не забудьте добавить к значениям единицы измерения. Например, мы должны устанавливать 10px, а не просто 10 в свойство elem.style.top. Иначе это не сработает

// Для задания нескольких стилей в одной строке используется специальное свойство style.cssText

console.log(el.style.color);
const redBox = document.querySelector('.redBox')
console.log(redBox.style.width);

// redBox.style.cssText = "background-color: yellow; height: 500px;"


// Вычисленные стили: getComputedStyle
// Итак, изменить стиль очень просто. Но как его прочитать? 
// Например, мы хотим знать размер, отступы, цвет элемента. Как это сделать? 
// Свойство style оперирует только значением атрибута "style", без учёта CSS-каскада. Поэтому, используя elem.style, мы не можем прочитать ничего, что приходит из классов CSS.

const boxStyles = getComputedStyle(redBox);
console.log(boxStyles.height);
console.log(boxStyles.width);
// console.log(boxStyles);

const boxHeight = getComputedStyle(redBox).height;
console.log(boxHeight);
const boxWidth = getComputedStyle(redBox).width;
console.log(boxWidth);


// offsetWidth - Другой способ
console.log(redBox.offsetWidth);


// - классы
// elem.classList – это специальный объект с методами для добавления/удаления одного класса.

// Методы classList:
// elem.classList.add/remove("class") – добавить/удалить класс.
// elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
// elem.classList.contains("class") – проверка наличия класса, возвращает true/false.


// - содержимое
// 1) el.textContent = "Новый текст из ЖС" - изменение текстового содержимого
// 2) el.innerHTML = "<p>text</p>";

// Создание элемента:
// document.createElement('div') - создаёт новый элемент (в памяти джаваскрипт), но не добавляет его на страницу
// const myDiv = document.createElement('div');


// Модификации перед добавлением:
// myDiv.textContent = "Новый текст из ЖС";


// Добавление элемента:
// el.appendChild(myDiv) - добавляет элемент (в конец) (устаревший метод)

// Вот методы для различных вариантов вставки:
// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) – вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) – заменяет node заданными узлами или строками.
// before
// prepend
// 0
// 1
// 2
// append
// after


// Удаление узлов 
// Для удаления узла есть методы node.remove().


// Перемещение элементов
// Если нам нужно переместить элемент в другое место – нет необходимости удалять его со старого. Все методы вставки автоматически удаляют узлы со старых мест.


// DocumentFragment

// DocumentFragment является специальным DOM-узлом, который служит обёрткой для передачи списков узлов.
// Мы можем добавить к нему другие узлы, но когда мы вставляем его куда-то, он «исчезает», вместо него вставляется его содержимое.




const list = document.querySelector('.list');

function createElem(tag, text) {
    const elem = document.createElement(tag); // pocket
    elem.textContent = text;
    return elem
}

const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    let li = createElem('li', 'item text ' + i);
    fragment.append(li)
}

console.log(fragment);
list.append(fragment);


// Работа внутри ДОМ (навигация по ДОМу):
// Получив DOM-узел, мы можем перейти к его ближайшим соседям используя навигационные ссылки.

// Есть два основных набора ссылок:
// Для всех узлов: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.

// Только для узлов-элементов: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.

// Некоторые виды DOM-элементов, например таблицы, предоставляют дополнительные ссылки и коллекции для доступа к своему содержимому.
