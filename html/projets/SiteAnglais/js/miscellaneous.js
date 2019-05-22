function topnavMenu() {
    var x = document.getElementById("navbar");
    if (!x.classList.contains("navOpen")) {
        x.classList.add("navOpen");
    } else {
        x.classList.remove("navOpen");
    }
}

function resizeHome() {
    var width = window.innerWidth;

    var home = document.getElementById("home");
    var imgHome = document.getElementById("imgHome");

    if (width <= 1024) {
        if (!home.classList.contains("flex-column")) {
            home.classList.remove("flex-row");
            home.classList.add("flex-column");
        }

        if (!imgHome.classList.contains("mr0")) {
            imgHome.classList.add("mr0");
        }

    } else if (width > 1024) {
        if (home.classList.contains("flex-column")) {
            home.classList.remove("flex-column");
            home.classList.add("flex-row");
        }

        if (imgHome.classList.contains("mr0")) {
            imgHome.classList.remove("mr0");
        }
    }

}

var delay = 2000;
var slideIndex = 0;

function slideShow() {

    var slides = document.getElementsByClassName("slide");

    for (var i = 0; i < slides.length; i++)
        slides[i].style.display = "none";

    if (slideIndex > slides.length - 1)
        slideIndex = 0;

    slides[slideIndex].style.display = "block";
    slideIndex++;
    setTimeout(slideShow, delay);
}

