var status_opt = false;
var nav_options = document.querySelector(".nav_options");
var hamburger = document.querySelector(".hamburger-menu");
var button_submit = document.getElementById("submit_butt");
var inputs = document.querySelectorAll(".form_data>input");
hamburger.addEventListener("click", function () {
    if (screen.width <= 650) {
        if (!status_opt) {
            nav_options.style.transform = "translateY(100%)";
            status_opt = !status_opt;
        }
        else {
            nav_options.style.transform = "translateY(0%) translateY(-7.1vh)";
            status_opt = !status_opt;
        }
    }
});
button_submit.addEventListener("click", function () {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
});
