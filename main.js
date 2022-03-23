const slider = document.querySelector('.testimonial__images');

const leftArrow = document.querySelector('.arrow--left');
const rightArrow = document.querySelector('.arrow--right');
const images = document.querySelectorAll('.testimonial__images .testimonial__images--image');
let sectionIndex = 0;

// document.querySelectorAll('.testimonial__images .testimonial__images--image').forEach((image, index) => {
//     sectionIndex = index;
//     image.classList.add('active');
// });

leftArrow.addEventListener('click', () => {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    document.querySelector('.testimonial__images .testimonial__images--image img.active').classList.remove('active');
    images[sectionIndex].children[0].classList.add('active');
    slider.style.transform = `translateX(${(sectionIndex) * -25}%)`;

    if(sectionIndex > 0) {
        leftArrow.classList.add('active');
        rightArrow.classList.add('active');
        rightArrow.removeAttribute('disabled');
        leftArrow.removeAttribute('disabled');
    } else {
        leftArrow.classList.remove('active');
        leftArrow.setAttribute('disabled', true);
    }
});

rightArrow.addEventListener('click', () => {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    document.querySelector('.testimonial__images .testimonial__images--image img.active').classList.remove('active');
    images[sectionIndex].children[0].classList.add('active');
    slider.style.transform = `translateX(${(sectionIndex) * -25}%)`;

    if(sectionIndex < 3) {
        leftArrow.classList.add('active');
        rightArrow.classList.add('active');
        rightArrow.removeAttribute('disabled');
        leftArrow.removeAttribute('disabled');
    } else {
        rightArrow.classList.remove('active');
        rightArrow.setAttribute('disabled', true);
    }
});