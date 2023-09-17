

document.addEventListener("DOMContentLoaded", () => {
    let thumbnails = document.querySelectorAll(".thumbnail");

    //TODO Preload the images
    thumbnails.forEach((thumbnail) => {
        const src = thumbnail.getAttribute("data-src");
        if (src) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                thumbnail.style.backgroundImage = `url(${src})`;
            };
        }
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            showImage(index + 1);
        });
    });
});

// function that shows the full image
function showImage(imageNumber) {
    const fullImage = document.getElementById("fullImage");
    const description = document.getElementById("description");
    let thumbnails = document.querySelectorAll(".thumbnail");


    // delete the 'active' class from the active thumbnail
    const activeThumbnail = document.querySelector(".thumbnail.active");
    if (activeThumbnail) {
        activeThumbnail.classList.remove("active");
    }

    // actualize the full image
    fullImage.src = "images/gallery3/image" + imageNumber + ".jpg";

    // actualize the description
    description.textContent = "Galeria zdjęcie " + imageNumber;


    // delay adding effects to the full image
    setTimeout(() => {
        // Dodaj efekty do pełnego obrazu
        fullImage.style.filter = "blur(10px)";
        fullImage.style.transform = "scale(0)";
        fullImage.style.opacity = 0;

        // reverse the effects after 0.15s
        setTimeout(() => {
            fullImage.style.filter = "none";
            fullImage.style.transform = "scale(1)";
            fullImage.style.opacity = 1;
        }, 100); //
    }, 0);

    // add the 'active' class to the clicked thumbnail
    thumbnails[imageNumber - 1].classList.add("active");
}

export default showImage;