!function(){"use strict";(function(){const e=document.querySelector(".mobile-nav-btn"),n=document.querySelector(".mobile-nav"),o=document.querySelector(".nav-icon");e.onclick=function(){n.classList.toggle("mobile-nav--open"),o.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}})(),new Swiper(".production-slider",{keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoHeight:!0,slidesPerView:1.1,breakpoints:{992:{slidesPerView:4},576:{slidesPerView:1.5}}}),new Swiper(".header-slider",{navigation:{nextEl:".header-slider__next",prevEl:".header-slider__prev"}})}();