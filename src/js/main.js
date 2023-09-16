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

//Click outside dialog to close
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





const sliderFrame = document.querySelector(".slider-frame");
const imagesSlider = document.querySelectorAll(".slider img");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 2; // Indeks zdjęcia na środku




// Previous button
nextButton.addEventListener("click", () => {
    if (currentIndex < imagesSlider.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

// Next button
prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});






// Function to update the slider
function updateSlider() {

    // Width of the single image
    const imageWidth = imagesSlider[0].clientWidth;
    // Moving the slider frame
    const translateValue = -currentIndex * imageWidth;

    sliderFrame.style.transform = `translateX(${translateValue}px)`;

    // Scaling the images
    imagesSlider.forEach((image, index) => {
        const distanceFromCenter = Math.abs(index - currentIndex);
        const scaleFactor = distanceFromCenter === 0 ? 1.2 : 1 / (distanceFromCenter * 0.2 + 1); // Ustawienie skalowania
        image.style.transform = `scale(${scaleFactor})`;
    });

    // Making the center image z-index higher than the others
    imagesSlider.forEach((image, index) => {
        const distanceFromCenter = Math.abs(index - currentIndex);
        const scaleFactor = distanceFromCenter === 0 ? 1.2 : 1 / (distanceFromCenter * 0.2 + 1); // Ustawienie skalowania

        image.style.transform = `scale(${scaleFactor})`;

        if (distanceFromCenter === 0) {
            image.style.zIndex = 1; // Center image on top
        } else {
            image.style.zIndex = 0; // The rest of the images below
        }
    });

    imagesSlider.forEach((image, index) => {
        const distanceFromCenter = Math.abs(index - currentIndex);
        const isLeft = index < currentIndex;
        const isRight = index > currentIndex;

        // Ustawienie klasy CSS na zdjęciach po lewej stronie
        if (isLeft) {
            image.classList.add('left-image');
            image.classList.remove('right-image');
        } else {
            image.classList.remove('left-image');
        }

        // Ustawienie klasy CSS na zdjęciach po prawej stronie
        if (isRight) {
            image.classList.add('right-image');
            image.classList.remove('left-image');
        } else {
            image.classList.remove('right-image');
        }
    });
}

// Obsługa kliknięcia na zdjęcie po prawej stronie
document.addEventListener("click", (e) => {
    if (e.target.classList.contains('right-image')) {
        currentIndex++;
        updateSlider();
    }
});

// Obsługa kliknięcia na zdjęcie po lewej stronie
document.addEventListener("click", (e) => {
    if (e.target.classList.contains('left-image')) {
        currentIndex--;
        updateSlider();
    }
});







// Initialize slider
updateSlider();

