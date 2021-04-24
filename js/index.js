var status_opt = false;
var nav_options = document.querySelector(".nav_options");
var hamburger = document.querySelector(".hamburger-menu");
var button_submit = document.getElementById("submit_butt");
hamburger.addEventListener("click", function () {
    if (!status_opt) {
        nav_options.style.transform = "translateY(100%)";
        status_opt = !status_opt;
    }
    else {
        nav_options.style.transform = "translateY(0%) translateY(-7.1vh)";
        status_opt = !status_opt;
    }
});
button_submit.addEventListener("click", function () {
    console.log("clicked");
});
