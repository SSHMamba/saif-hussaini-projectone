const carouselImages = document.querySelector('.carousel-images')
const carouselButtons = document.querySelectorAll('button');
const numberOfImages = document.querySelectorAll('.carousel-images img').length;

let imageIndex = 1;
let translateX = 0;


    carouselButtons.forEach(button => {
        button.addEventListener('click', (buttonSelect) => {
            if (buttonSelect.target.id === 'previous') {
                if (imageIndex !== 1) {
                imageIndex--;
                translateX += 400;
                }
            } 
          
            else {
                if (imageIndex !== numberOfImages) {
                    imageIndex++;
                    translateX -= 400;
                }
            }
          carouselImages.style.transform = `translateX(${translateX}px)`;
        })
    });