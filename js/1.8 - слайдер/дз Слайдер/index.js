const cars = [
    {
        title: "BMW",
        description: 'bmwbmwbmwbmwbmwbmwbmw bmwbmwbmwbmwbmwbmwbmw bmwbmwbmwbmwbmwbmwbmw bmwbmwbmwbmwbmwbmwbmw',
        link: 'https://www.bmw.by/content/dam/bmw/common/all-models/3-series/sedan/2022/navigation/bmw-3-series-sedan-lci-modelfinder.png'
    },
    {
        title: "Lada",
        description: 'ladaladaladalada ladaladaladalada ladaladaladaladaladaladaladalada ladaladaladalada ladaladaladalada ladaladaladalada ladaladaladalada ladaladaladalada',
        link: 'https://brightpark.ru/upload/iblock/e32/wiocwx8y5tby244h5sq60s436wxi0a97/techno_672-_3_.webp'
    },
    {
        title: "Mercedes",
        description: 'mercedesmercedesmercedes mercedesmercede smercedesmercedes mercedesmercedesmercedesmercedesmercedesmercedesmercedes',
        link: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png"
    }]

let container = document.querySelector(".slider")
let title = document.querySelector(".container-title");
let description = document.querySelector(".description");
let photo = document.querySelector(".photo")

title.textContent = cars[0].title
description.textContent = cars[0].description
photo.setAttribute("src", cars[0].link)
let curr = 0;

container.addEventListener('click', showOther);

function showOther(e) {
    if (e.target.classList.contains('button-previous')) {
        if (curr === 0) {
            curr = cars.length
        }
        photo.setAttribute("src", cars[curr - 1].link)
        title.textContent = cars[curr - 1].title;
        description.textContent = cars[curr - 1].description;
        curr--
    }
    if (e.target.classList.contains("button-next")) {
        if (curr === cars.length - 1) {
            curr = - 1
        }
        photo.setAttribute("src", cars[curr + 1].link)
        title.textContent = cars[curr + 1].title;
        description.textContent = cars[curr + 1].description;
        curr++
    }
}