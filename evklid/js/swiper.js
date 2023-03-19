const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        hide: true,
        // el: ".swiper-scrollbar",
    },

    autoplay: {
        delay: 5000,
    },
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#slide").addEventListener("click");
});
