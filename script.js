const button = document.querySelector(".toggle")
const leftMenu = document.querySelector(".left-menu ul")

button.addEventListener("click", function () {
    leftMenu.classList.toggle("active")
})