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
    $(".owl-testimonial").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
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
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
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
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


});

// form data

const submit_btn = document.querySelector('#submit_btn');

submit_btn.addEventListener("click", async function (e) {
    e.preventDefault();

    // loader
    let loader = document.querySelector('.loader_wrapper');
    // input
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const event_type = document.querySelector('#event_type').value;
    const city = document.querySelector('#city').value;
    const date = document.querySelector('#date').value;
    const query = document.querySelector('#floatingTextarea').value;

    // error
    const name_error = document.querySelector('.name_error');
    const email_error = document.querySelector('.email_error');
    const phone_error = document.querySelector('.phone_error');
    const event_type_error = document.querySelector('.event_type_error');
    const city_error = document.querySelector('.city_error');
    const date_error = document.querySelector('.date_error');

    // regex
    const name_regex = /^[a-zA-Z]+[\-\'\s]?[a-zA-Z ]{1,40}$/;
    const email_regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const phone_regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    let nextFlag = false;
    if (name && (email || phone)) {
        if (name) {
            if (name.match(name_regex)) {
                name_error.textContent = "";
                nextFlag = true;
            } else {
                name_error.textContent = "Please enter a valid name";
                nextFlag = false;
            }
        }

        if (email) {
            if (email.match(email_regex)) {
                email_error.textContent = "";
                nextFlag = true;
            } else {
                email_error.textContent = "Please enter a valid email";
                nextFlag = false;
            }
        }

        if (phone) {
            if (phone.match(phone_regex)) {
                phone_error.textContent = "";
                nextFlag = true;
            } else {
                phone_error.textContent = "Please enter a valid phone number";
                nextFlag = false;
            }
        }

        if (city) {
            city_error.textContent = "";
            nextFlag = true;
        } else {
            city_error.textContent = "Please enter a city name";
            nextFlag = false;
        }

    } else {
        nextFlag = false;
        alert("Please complete the form before proceeding ");
    }


    if (nextFlag) {
        loader.style.display = "flex";
        const service_ID = "service_4iccn3l";
        const template_ID = "template_6omeh3l";

        const params = {
            name,
            email,
            phone,
            event_type,
            city,
            date,
            query
        }

        await emailjs.send(service_ID, template_ID, params)
            .then((res) => {
                console.log(res);
            }).catch(err => {
                console.log(err)
            })

        loader.style.display = "none";
        document.querySelector('#name').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#phone').value = "";
        document.querySelector('#event_type').value = "";
        document.querySelector('#city').value = "";
        document.querySelector('#date').value = "";
        document.querySelector('#floatingTextarea').value = "";
        alert("Successfully submit we will connect within 6 hours")


    }




})







