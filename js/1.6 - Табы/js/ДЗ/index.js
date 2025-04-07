// const navigation = document.querySelector('.navigation');
const tabsParent = document.querySelector('.tabsParent');
const tabs = document.querySelectorAll('.tab');
const tabs2 = document.getElementsByClassName('tab');
const contents = document.querySelectorAll('.tab-content');
// let activeContent = document.querySelector('.activeContent');
// let activeTab = document.querySelector('.activeTab')

console.log(tabs);
console.log(tabs2);
console.log(contents);

function clearStatus() {
    tabs.forEach((tab) => tab.classList.remove("activeTab"));
    contents.forEach((content) => content.classList.remove("activeContent"));
}


tabsParent.addEventListener('click', function (e) {
    console.log(tabs);
    console.log(tabs2);
    const isTab = e.target.classList.contains('tab') && e.target.tagName === "DIV";

    if (isTab) {
        tabs.forEach((tab, index) => {
            if (e.target == tab) {
                clearStatus();
                tab.classList.add('activeTab');
                contents[index].classList.add("activeContent")
            }
        })
    }
});


// navigation.addEventListener('click', switchTab);

// function switchTab(e) {
//     for (let i = 0; i < list.length; i++) {
//         if (e.target.id === list[i].getAttribute("id")) {
//             activeTab.classList.remove('activeTab');
//             e.target.classList.add('activeTab');
//             activeTab = e.target;
//             activeContent.classList.remove("activeContent");
//             list[i].classList.add("activeContent");
//             activeContent = list[i];
//         }
//     }
// }
