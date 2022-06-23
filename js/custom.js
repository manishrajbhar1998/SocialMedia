// Header Scroll

let nav = document.querySelector('.navbar');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('header_scrolled');
    }else{
        nav.classList.remove('header_scrolled'); 
    }
}

// nav hide
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener('click',function(){
        navCollapse.classList.remove('show');
    })
})


//  Owl Carousel
$(document).ready(function(){
    $(".client_slider_section").owlCarousel({
        items:4,
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
});