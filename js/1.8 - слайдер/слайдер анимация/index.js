const cars = [
    {
        link: 'https://www.bmw.by/content/dam/bmw/common/all-models/3-series/sedan/2022/navigation/bmw-3-series-sedan-lci-modelfinder.png'
    },
    {
        link: 'https://brightpark.ru/upload/iblock/e32/wiocwx8y5tby244h5sq60s436wxi0a97/techno_672-_3_.webp'
    },
    {
        link: "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/NL/465210/X24_055/iris.png?q=COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtGyjtsd8J3cUfimWXGE5YrJbXqWBOIJRX%25bApLMvI5uEOxQC3PgwkzN5Tbm7jCODhKVMXW%25vqEAkyLRlN6Yax2jYrH1lb%25n8w2S4oiZT5ZM4zuA1YtEWpTu%25KB7bLFIT9ZxexrlrKE847dvE5jCDtyAib&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center"
    }]

let buttonsContainer = document.querySelector(".buttons-container");
let gallery = document.querySelector(".gallery")

buttonsContainer.addEventListener("click", showOther)
let sliderPosition = 0;
let galleryItem = gallery.children[0]



function showOther(e) {
    if (e.target.classList.contains("button-previous")) {
        sliderPosition--
        if (sliderPosition < 0) {
            sliderPosition = cars.length - 1
        }

    }
    if (e.target.classList.contains("button-next")) {
        sliderPosition++
        if (sliderPosition >= cars.length) {
            sliderPosition = 0
        }

    }
    gallery.style = `transform: translateX(${-sliderPosition * galleryItem.offsetWidth}px);`
}
