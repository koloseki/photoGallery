import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'


let images = document.querySelectorAll('.image');
let searchIcons = document.querySelectorAll('.SearchIcon');
const dialog = document.querySelector("dialog")


images.forEach((image, index) => {
    image.addEventListener("mouseenter", () => {
        searchIcons[index].classList.remove("invisible");
    });

    image.addEventListener("mouseleave", () => {
        searchIcons[index].classList.add("invisible");
    });

    image.addEventListener("click", () => {
        const clickedImage = images[index];
        const imageSrc = clickedImage.getAttribute("src");
        const imageAlt = clickedImage.getAttribute("alt");

        dialog.innerHTML = `
            <img src="${imageSrc}" alt="${imageAlt}" class="dialogImage">
        `;

        dialog.showModal();
    });
});

dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialog.close()
    }
})
