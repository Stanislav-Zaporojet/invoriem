$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
        items: 3,
        responsive : {
            breakpoint from 0 up
            0 : {
                items: 1,
            },
            breakpoint from 480 up
            601 : {
                items: 2,
            },
            breakpoint from 768 up
            1001 : {
                items: 3,
        },
    }),
  });

//    video

const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video-picture');
const videowrapper = document.querySelector('.video');
videoBtn.addEventListener('click', function () {
    videoPicture.classList.add('none');
    videowrapper.classList.remove('video-overlay');
})