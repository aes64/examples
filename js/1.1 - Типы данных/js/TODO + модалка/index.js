const form = document.querySelector(".form");
const list = document.querySelector(".list");
const popup = document.querySelector(".popup");
const buttonAdd = document.querySelector('.button-submit')

const input = document.querySelector(".input");

let parent;

form.addEventListener("click", createItem);

const handler = (e) => {
    if (e.target.value == "yes") {
        parent.remove();
        popup.setAttribute("hidden", "");
        //popup.removeEventListener("click", handler);
    }
    if (e.target.value == "no") {
        popup.setAttribute("hidden", "");
        // popup.removeEventListener("click", handler); 
    }
};

popup.addEventListener("click", handler);

function removeItem(e) {
    parent = e.target.parentElement;
    popup.removeAttribute("hidden");
}


function edit(e) {
    e.preventDefault();
    const btn = e.target;
    buttonAdd.setAttribute('hidden', '') //исчезает кнопка добавления нового айтема
    form.removeEventListener('click', createItem)//листнер снят
    input.focus();//фокус на инпут
    const textElem = e.target.parentElement.childNodes[0];
    input.value = textElem.textContent; // в редакторе текст айтема
    const buttonSaveChanges = document.createElement('button'); // создаем кнопку сохранить
    buttonSaveChanges.textContent = 'Сохранить'
    form.appendChild(buttonSaveChanges);//добавляем ее в дерево
    // buttonSaveChanges.addEventListener('click', saveChanges());
    buttonSaveChanges.addEventListener('click', function (e) {
        saveChanges(e, btn);
    });
}

function saveChanges(e, btn) {
    e.target.remove();
    e.target.removeEventListener('click', saveChanges)
    buttonAdd.removeAttribute('hidden', '')
    form.addEventListener('click', createItem)
    btn.parentElement.childNodes[0].textContent = input.value;
    input.value = '';
}

function createItem(e) {
    e.preventDefault()
    if (e.target.classList.contains("button-submit")) {
        const inputText = input.value;
        const nodeItem = document.createElement("li"); // pocket
        nodeItem.className = "item";
        const span = document.createElement("span");
        span.textContent = inputText;
        span.className = "text"
        const button = document.createElement("button"); //apple
        button.className = "button-delete";
        button.addEventListener("click", removeItem);
        const buttonEdit = document.createElement("button");
        buttonEdit.classList.add("edit-button");
        buttonEdit.addEventListener('click', edit)
        nodeItem.appendChild(span)
        nodeItem.appendChild(buttonEdit);
        nodeItem.appendChild(button);
        list.append(nodeItem); // go to room
        input.value = "";
    }



}

