const icons = document.querySelectorAll(".icon");
const items = document.querySelector(".menu_items");
icons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
        icon.classList.toggle("open");
        items.classList.toggle("d-block");
    });
});