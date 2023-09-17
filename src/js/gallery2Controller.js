


const sliderFrame = document.querySelector(".slider-frame");
const imagesSlider = document.querySelectorAll(".slider img");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const dialog = document.querySelector("dialog")


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
        const isLeft = index < currentIndex;
        const isRight = index > currentIndex;

        // Setting CSS class on the left images
        if (isLeft) {
            image.classList.add('left-image');
            image.classList.remove('right-image');
        } else {
            image.classList.remove('left-image');
        }

        // Setting CSS class on the right images
        if (isRight) {
            image.classList.add('right-image');
            image.classList.remove('left-image');
        } else {
            image.classList.remove('right-image');
        }
    });

    // Click on the center image
    imagesSlider.forEach((image, index) => {
        image.addEventListener("click", () => {
            const distanceFromCenter = Math.abs(index - currentIndex);
            if (distanceFromCenter === 0) {
                const imageSrc = image.getAttribute("src");
                const imageAlt = image.getAttribute("alt");

                dialog.innerHTML = `
        <img src="${imageSrc}" alt="${imageAlt}" class="dialogImage">
      `;

                dialog.showModal();
            }
        });
    });



}

// Click on the image on the right side
document.addEventListener("click", (e) => {
    if (e.target.classList.contains('right-image')) {
        currentIndex++;
        updateSlider();
    }
});

// Click on the image on the left side
document.addEventListener("click", (e) => {
    if (e.target.classList.contains('left-image')) {
        currentIndex--;
        updateSlider();
    }
});

export default updateSlider;