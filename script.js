const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const categoryHeader = document.querySelector('.nav-item1 h2');

    categoryHeader.addEventListener("click", function() {
        const subItemsDiv = document.querySelector('.sub-items');

        const currentDisplay = window.getComputedStyle(subItemsDiv).display;

        subItemsDiv.style.display = currentDisplay === 'none' ? 'flex' : 'none';

        const navDiv = document.querySelector('.navbar');
        navDiv.style.backgroundColor = currentDisplay === 'none' ? '#e9efff':'#ffffff'; 
    });
});

function toggleSaveIcon(icon) {
    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid');
  }
  
  function changeCurrency(currency) {
    const priceButtons = document.querySelectorAll('.price-button');
    const exchangeRate = 80; 
   
    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');
  
    priceButtons.forEach(function(button) {
      let currentPrice = parseInt(button.innerText.replace(/[^\d.]/g, ''));
      let convertedPrice;
  
      if (currency === 'INR') {
          convertedPrice = currentPrice * exchangeRate;
          button.innerText = 'INR ' + convertedPrice + ' Enroll Now';
      } else if (currency === 'USD') {
          convertedPrice = currentPrice / exchangeRate;
          button.innerText = '$' + convertedPrice + ' Enroll Now';
      }
  });
    
    
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    
   
    if (currency === 'INR') {
        btn1.classList.add('active');
    } else if (currency === 'USD') {
        btn2.classList.add('active');
    }
  }
  
  
function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    

    
    
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
}


$(document).ready(function () {
    initParadoxWay();
});

const cardsWrapper = document.querySelector('.cards-wrapper');
const cards = document.querySelectorAll('.sec6-card');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;

arrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

arrowRight.addEventListener('click', () => {
    if (currentIndex < cards.length - 3) {
        currentIndex++;
        updateSlider();
    }
});

function updateSlider() {
    const newPosition = -currentIndex * (cards[0].offsetWidth + 20);
    cardsWrapper.style.transform = `translateX(${newPosition}px)`;

    cards.forEach(card => card.classList.add('blur-effect'));

    for (let i = currentIndex; i < currentIndex + 3; i++) {
        cards[i].classList.remove('blur-effect');
    }
}
updateSlider();