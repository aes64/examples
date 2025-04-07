const form = document.querySelector(".form");
const list = document.querySelector(".list");
const popup = document.querySelector(".popup");
const buttonAdd = document.querySelector('.button-submit')

const input = document.querySelector(".input");

let parent;

form.addEventListener("submit", createItem);

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
    buttonAdd.setAttribute('hidden', '')
    form.removeEventListener('submit', createItem)
    input.focus();
    input.value = e.target.parentElement.textContent;
    const buttonSaveChanges = document.createElement('button');
    buttonSaveChanges.textContent = 'Сохранить'
    form.appendChild(buttonSaveChanges);

    form.addEventListener('click', (event) => {
        //buttonSaveChanges.addEventListener('click', (event) => {
        event.preventDefault()
        console.log(e.target.parentElement)

        e.target.parentElement.textContent = input.value //?? нет кнопок в родительском элем
        input.value = '';
        buttonSaveChanges.remove();
        buttonAdd.removeAttribute("hidden");
        form.addEventListener('submit', createItem) //?? ресет 
    })

}

function createItem(e) {
    e.preventDefault();
    const inputText = input.value;
    const nodeItem = document.createElement("li"); // pocket
    nodeItem.className = "item";
    nodeItem.textContent = inputText;

    const button = document.createElement("button"); //apple
    button.className = "button-delete";
    button.addEventListener("click", removeItem);
    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("edit-button");
    buttonEdit.addEventListener('click', edit)
    nodeItem.appendChild(buttonEdit);
    nodeItem.appendChild(button);
    list.append(nodeItem); // go to room
    input.value = "";

}

