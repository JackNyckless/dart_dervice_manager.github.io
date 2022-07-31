console.log("app.js is connected")

const accordionItems = document.querySelectorAll(".accordion__item")
let accordionActive = document.querySelector(".accordion__item.active")

console.log(accordionItems)

for(let accordionItem of accordionItems) {
    accordionItem.addEventListener("click", function() {
        accordionActive.classList.remove("active")
        accordionItem.classList.add("active")
        accordionActive = accordionItem
    })
}