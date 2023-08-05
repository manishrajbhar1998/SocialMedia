// Header Scroll

let nav = document.querySelector('.navbar');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('header_scrolled');
    } else {
        nav.classList.remove('header_scrolled');
    }
}

// nav hide
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function (a) {
    a.addEventListener('click', function () {
        navCollapse.classList.remove('show');
    })
})


//  Owl Carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
});




