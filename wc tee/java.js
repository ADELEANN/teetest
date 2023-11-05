// Function to change the background image of content-block2
function changeBackgroundImage() {
    const changingBackgroundDiv = document.getElementById('changing-background');
    const backgroundImages = ['53.png', '54.png', '55.png']; // Replace with your image URLs
    let currentIndex = 0;

    function updateBackgroundImage() {
        changingBackgroundDiv.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
        currentIndex = (currentIndex + 1) % backgroundImages.length;
    }

    // Initial image update
    updateBackgroundImage();

    // Set an interval to change the image every 2 seconds
    setInterval(updateBackgroundImage, 2000);
}

// Function to change the right image
function changeRightImage() {
    const rightImage = document.querySelector('.right-image img');
    const imageSources = ['1.png', '25.png', '27.png']; // Replace with your image URLs
    let currentIndex = 0;

    function updateImage() {
        rightImage.src = imageSources[currentIndex];
        currentIndex = (currentIndex + 1) % imageSources.length;
    }

    // Initial image update
    updateImage();

    // Set an interval to change the image every 2 seconds
    setInterval(updateImage, 2000);
}

changeBackgroundImage(); // Call the background image change function
changeRightImage(); // Call the right image change function
changeImageInSplitBlock5();

function changeImageInSplitBlock5() {
    const imageDiv = document.querySelector('.content-block5 .block-image img');
    const imageSources = ['322.png', '355.png', '444.png', '455.png', '466.png']; // Replace with your image URLs
    let currentImageIndex = 0;

    function updateImage() {
        imageDiv.src = imageSources[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    }

    // Initial image update
    updateImage();

    // Set an interval to change the image every 2 seconds
    setInterval(updateImage, 2000);
}

// side panel
/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "75%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

