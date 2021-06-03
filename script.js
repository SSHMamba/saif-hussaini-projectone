// define the elements I will be grabbing from html file
const carouselImages = document.querySelector('.carousel-images')
const carouselButtons = document.querySelectorAll('button');
const numberOfImages = document.querySelectorAll('.carousel-images img').length;

// on refresh, imageIndex represents the images, and it starts at 1
let imageIndex = 1;
// on refresh, wait for button to be pressed to begin translate
let translateX = 0;

// add clicking functionality to button and implement .forEach for button to toggle through pictures
    carouselButtons.forEach(button => {
        button.addEventListener('click', (buttonSelect) => {
            if (buttonSelect.target.id === 'previous') {
                // if image carousel is not at starting position, go to previous image
                if (imageIndex !== 1) {
                imageIndex--;
                translateX += 400;
                }
            } 
            // if image carousel is not at the end, go to next image
            else {
                if (imageIndex !== numberOfImages) {
                    imageIndex++;
                    translateX -= 400;
                }
            }
        // translate pictures when button is pressed
          carouselImages.style.transform = `translateX(${translateX}px)`;
        })
    });