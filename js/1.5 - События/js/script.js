// console.log("1.5")

// Есть три способа назначения обработчиков событий:
// 1. Атрибут HTML: onclick="...".
// 2. DOM-свойство: elem.onclick = function.
// 3. Специальные методы: 
// - elem.addEventListener(event, handler[, phase]) - для добавления
// - removeEventListener - для удаления




// console.log(myBtn.onclick);

// myBtn.onclick = function () {
//     console.log("other event")
// }

// console.log(myBtn.onclick);


// Специальный метод -  addEventListener

// 1й аргумент - имя события, которое мы хотим отслеживать
// 2й аргумент - функция, которую браузер выполнит, когда указанное в первом аргументе событие произойдёт


// HTML-атрибуты используются редко потому, что JavaScript в HTML-теге выглядит немного странно. К тому же много кода там не напишешь.

// DOM-свойства вполне можно использовать, но мы не можем назначить больше одного обработчика на один тип события. Во многих случаях с этим ограничением можно мириться.

// Последний способ самый гибкий, однако нужно писать больше всего кода. Есть несколько типов событий, которые работают только через него, к примеру transitionend и DOMContentLoaded. 


// С помощью жс мы можем получить доступ к элементам нашего ДОМ дерева. Считывать информацию с них. Изменять элементы. Отслеживать события, которые происходят на этих элементах и на странице- клики, движения мышью, нажатия на клавиатуру и  многое другое . Любое событие можно отследить, перехватить и повесить на это событие слушатель. И каждый раз когда событие случилось, то выполнить функцию, которую мы записали вторым аргументом.


// const phoneInput = document.querySelector('.phone');

// 0 123456789

// event.preventDefault() - действие по умолчанию не должно выполняться так, как обычно (отменяет действие по умолчанию)

// phoneInput.addEventListener('keydown', function (event) {

//     let isNumber = false;
//     if (event.key >= 0 || event.key <= 9) {
//         isNumber = true;
//     }

//     let isPlusMinos = false;
//     if (event.key === "+" || event.key === "-") {
//         isPlusMinos = true
//     }

//     let isSpace = false;
//     if (event.key === " ") {
//         isSpace = true
//     }

//     // это пробел и eto число и  eto плюсминус


//     // это не спэйс или это не намбер или это не плюсминус
//     if (!isSpace && !isNumber && !isPlusMinos) {
//         event.preventDefault();
//     }

// В каком случае мы превентим ввод?
// Если это не пробел и это не число и это не плюсминус

// if (!isSpace) {
//     console.log("This is not space");
// }


// })


// phoneInput.addEventListener('keydown', function (e) {
//     console.log(phoneInput.value, 'keydown');
// })
// phoneInput.addEventListener('keypress', function (e) {
//     console.log(phoneInput.value, 'keypress');
// })





// myForm.elements - объект со свойствами, имена которых соответствуют именам инпутов
// myForm.elements.inputName.value - получить значение определенного инпута

let form = document.getElementById("myForm");
let formElements = form.elements;
form.addEventListener("change", checkValues)

function toggleCheckbox() {
    if (formElements.haveAnimal.checked) {
        formElements.animalName.removeAttribute("disabled", '')
    } else {
        formElements.animalName.setAttribute("disabled", '');
        formElements.animalName.value = ""
    }
}

function checkValues() {
    toggleCheckbox()
    if (formElements.firstName.value.length == 0 || formElements.lastName.value.length == 0 || formElements.animalName.value.length == 0) {
        formElements.submit.setAttribute("disabled", '')
    } else {
        formElements.submit.removeAttribute("disabled", '')
    }
}
