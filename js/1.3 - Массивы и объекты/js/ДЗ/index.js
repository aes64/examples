const form = document.querySelector(".form");
const list = document.querySelector(".list");
const popup = document.querySelector(".popup");

const input = document.querySelector(".input");

let parent;

form.addEventListener("submit", createItem);

const handler = (e) => {
    console.log(e.target);
    // e.preventDefault();
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
    console.log(e.target);
    // e.preventDefault();
    parent = e.target.parentElement;
    popup.removeAttribute("hidden");


}

function createItem(e) {
    e.preventDefault();
    const inputText = input.value;
    const nodeItem = document.createElement("li"); // pocket
    nodeItem.className = "item";
    nodeItem.textContent = inputText;


    const button = document.createElement("button"); //apple
    button.className = "button-deconste";
    button.textContent = "✕";
    button.addEventListener("click", removeItem);
    nodeItem.appendChild(button); // apple to pocket
    list.append(nodeItem); // go to room
    input.value = "";
}


