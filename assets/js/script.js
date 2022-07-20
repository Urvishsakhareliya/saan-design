// ============ Navigation ============
$(".nav-blacklayer").hide();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    $(".nav-blacklayer").show();
    $("body").toggleClass('overflow-hidden');
}

const navLink = document.querySelectorAll(".nav-link");

$(document).ready(function () {
    $('.close-nav').click(function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        $(".nav-blacklayer").hide();
        $("body").removeClass('overflow-hidden');


    });
    $('.nav-blacklayer').click(function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        $(".nav-blacklayer").hide();
        $("body").removeClass('overflow-hidden');

    });
});

// ============ Search bar Toggle ============
$(".nav-search").on("click", function (e) {
    e.preventDefault();
    $(".top-search").slideToggle();
    if ($(".sec-1").hasClass('margin-top')) {
        $(".sec-1").removeClass('margin-top');
    }
    else {
        $(".sec-1").addClass('margin-top');
    }
});
$(".input-group-addon.close-search").on("click", function () {
    $(".top-search").slideUp();
});


$('.banner .owl-carousel').owlCarousel({
    loop: true,

    nav: true,
    dots: false,
    navText: ['<i class="ri-arrow-drop-left-line"></i>', '<i class="ri-arrow-drop-right-line"></i>'],

    responsive: {
        0: {
            items: 1
        }
    }
});

/* hide content and show on click */

$(document).ready(function () {
    $(".Category-ul li").click(function () {
        $(this).find('span').addClass('active-btn');
        $(this).siblings().find('span').removeClass('active-btn');
        // find which li was clicked
        var classClicked = $(this).attr('class');
        //remove "show" class from any previously clicked li
        $(".category-content div").removeClass("show");
        //add show class to the div corresponding the clicked li
        $(".category-content .content-" + classClicked).addClass("show");
        // debugger;
    });
});

$('.category-content .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="ri-arrow-drop-left-line"></i>', '<i class="ri-arrow-drop-right-line"></i>'],
    responsive: {
        0: {
            items: 2,
            margin: 10
        },
        600: {
            margin: 10,
            items: 3,
        },
        768: {
            margin: 30,
            items: 3,
        },
        992: {
            items: 4,
            margin: 10,
        },
        1200: {
            items: 4,
            margin: 30,
        }
    }
})

$(document).ready(function () {
    $('#exampleModal').modal('show');
})



$('.FU-slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 0,
    nav: true,
    dots: false,
    navText: ['<i class="ri-arrow-drop-left-line"></i>', '<i class="ri-arrow-drop-right-line"></i>'],
    responsive: {
        360: {
            items: 2
        },
        575: {
            items: 3
        },
        992: {
            items: 3
        },
        1200: {
            items: 6
        }
    }
})


