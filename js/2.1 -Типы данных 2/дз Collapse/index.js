const toggleElem = document.querySelector(".navigation");
const content = document.querySelector(".сollapse-content");
let text = document.querySelector(".text");


toggleElem.addEventListener("click", showContent)

function showContent(e) {
    let height = text.offsetHeight;
    if (content.classList.contains("active")) {
        text.style.visibility = "hidden";
        content.style.height = "0px"
        content.classList.remove("active")
    } else {
        content.classList.add("active")
        content.style.height = height + 'px';
        text.style.visibility = "visible"
    }
    console.log(height, textHeigth);
}