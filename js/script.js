let head = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        head.classList.add('sticky');
    }else{
        head.classList.remove('sticky');
    }
  });


let navbarSupported = document.getElementById('navbarSupportedContent');
function bigImg(){
    navbarSupported.classList.add("NewNav");
    navbarSupported.classList.remove("showNav");
}
function showNav(){
    navbarSupported.classList.remove("NewNav");
    navbarSupported.classList.add("showNav");
}



let countScroll = document.querySelector('header');
const counts = document.querySelectorAll('.our-achivement-left h3 span');
let hasCounted = false;

// Define the different speeds (interval time in milliseconds and increment per step)
const speedSettings = [
    { intervalTime: 250, increment: 1 },   // 1st element
    { intervalTime: 250, increment: 1 },   // 2nd element
    { intervalTime: 100, increment: 50 },   // 3rd element
    { intervalTime: 250, increment: 1 },   // 4th element
    { intervalTime: 100, increment: 25 }    // 5th element
];



//////////////////////////////////////////// single card bottom to top ///////////////////////////////////////////////////////////////////////
// Select all the .all-image-gallery elements
var all_gallery = document.querySelectorAll('.all-image-gallery');
// Set up an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // When an element comes into view (intersects the viewport)
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll_img'); // Add the 'scroll_img' class
        } else {
            entry.target.classList.remove('scroll_img'); // Remove the 'scroll_img' class
        }
    });
}, {
    threshold: 0.5 // The element will trigger when 50% is visible
});
// Observe each .all-image-gallery element
all_gallery.forEach(imageCard => {
    observer.observe(imageCard);
});

//////////////////////////////////////////////////////////////////////////////
var processall = document.querySelectorAll('.process-simplified-card-all');
const processallNew = new IntersectionObserver((entries, processallNew) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll_img'); 
        } else {
            entry.target.classList.remove('scroll_img'); 
        }
    });
}, {
    threshold: 0.5 
});
processall.forEach(Card1 => {
    processallNew.observe(Card1);
});
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
var services = document.querySelectorAll('.services-netboard-card-all');
const servicesNew = new IntersectionObserver((entries, servicesNew) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll_img'); 
        } else {
            entry.target.classList.remove('scroll_img'); 
        }
    });
}, {
    threshold: 0.5 
});
services.forEach(Card1 => {
    servicesNew.observe(Card1);
});
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
var popular = document.querySelectorAll('.popular-card-wrapper');
const popularNew = new IntersectionObserver((entries, servicesNew) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll_img'); 
        } else {
            entry.target.classList.remove('scroll_img'); 
        }
    });
}, {
    threshold: 0.5 
});
popular.forEach(Card1 => {
    popularNew.observe(Card1);
});
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
var countries = document.querySelectorAll('.countries-select-card-all');
const countriesNew = new IntersectionObserver((entries, servicesNew) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll_img'); 
        } else {
            entry.target.classList.remove('scroll_img'); 
        }
    });
}, {
    threshold: 0.5 
});
countries.forEach(Card1 => {
    countriesNew.observe(Card1);
});
//////////////////////////////////////////////////////////////////////////////



window.addEventListener('scroll', () => {

    if (window.scrollY > 2481 && !hasCounted) {
        hasCounted = true;
        counts.forEach((countElement, index) => {
            const countValue = parseInt(countElement.textContent, 10);
            let count = 0;
            const { intervalTime, increment } = speedSettings[index];

            const interval = setInterval(() => {
                if (count < countValue) {
                    count += increment;
                    if (count > countValue) count = countValue; 
                    countElement.textContent = count;
                } else {
                    clearInterval(interval);
                }
            }, intervalTime);
        });
    }
});



let ourAchivement = document.getElementById('achiveImg');
let bannerImage = document.querySelector('.banner-image');
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(window.scrollY > 2000){
        ourAchivement.classList.add('add-slide-right');
    }
    else{
        ourAchivement.classList.remove('add-slide-right');
    }

    if (window.scrollY > 500) {
        bannerImage.classList.remove('add-effect-one');
    }else{
        bannerImage.classList.add('add-effect-one');
    }
    
})

let bannerP = document.querySelector('.banner-content p span');
window.onload = function() {
    bannerImage.classList.add('add-effect-one');
};


$(document).ready(function(){
    $('.slide-one').owlCarousel({
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1500,
        autoplayHoverPause: true,
        margin: 10,
        nav: true,
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
    });

    $('.slid-det').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1500,
        autoplayHoverPause: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1 
            },
            600: {
                items: 2 
            },
            1000: {
                items: 2 
            }
        }
    });
    bannerP.classList.add('bannerParaShow');
});

document.getElementById('date-add').addEventListener('change', function(){
    this.classList.add('date-class');
})