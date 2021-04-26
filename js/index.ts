let status_opt: boolean = false;
const nav_options = document.querySelector<HTMLElement>(".nav_options");
const hamburger = document.querySelector(".hamburger-menu");
const button_submit = document.getElementById("submit_butt");
const inputs = document.querySelectorAll(".form_data>input");
hamburger.addEventListener("click", () => {
	if (screen.width <= 650){
		if (!status_opt){
			nav_options.style.transform = "translateY(100%)";
			status_opt = !status_opt;
		}else{
			nav_options.style.transform = "translateY(0%) translateY(-7.1vh)";
			status_opt = !status_opt;
		}
	}
});
button_submit.addEventListener("click", () =>{
	for(let i: number=0; i<inputs.length; i++){
		inputs[i].value = "";
	}
})
