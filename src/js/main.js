import '../scss/styles.scss'


import gallery1Controller from './gallery1Controller.js'
import updateSlider from "./gallery2Controller.js";
import showImage from './gallery3Controller.js'


// container for thumbnails
const thumbnailContainer = document.querySelector(".thumbnail_Container");

// Loop through images 1-10 and create thumbnails
for (let i = 1; i <= 10; i++) {
    const thumbnailDiv = document.createElement("div");
    thumbnailDiv.className = "thumbnail";

    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = "gallery3/image" + i + ".jpg";
    thumbnailImage.alt = "Miniatura " + i;
    thumbnailImage.width = 150;
    thumbnailImage.height = 150;

    thumbnailDiv.appendChild(thumbnailImage);
    thumbnailContainer.appendChild(thumbnailDiv);
}



// Call function gallery1Controller
gallery1Controller();

// Initialize slider
updateSlider();

// Call function showImage with index of image to show
showImage(1);



