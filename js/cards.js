let card = document.querySelectorAll(".card");
let close_butt = document.getElementById("close");
var original_text;

card.forEach((card) => {
  card.addEventListener("click", (e) => {
    CardLoader(card);
    card.removeAttribute("id");
    card.setAttribute("id", "expanded");
    close_butt.style.display = "inline";
    close_butt.addEventListener("click", (e) => {
      card.removeAttribute("id");
      card.setAttribute("id", "skills");
      close_butt.style.display = "none";
      card.innerHTML = original_text;
    });
  });
});
const CardLoader = (card) => {
  if (card.id === "skills") {
    original_text = card.innerHTML;
    var innercontent = `
      <div class="inner-card">
        <div class= "overview"><h3>Skills</h3><br/>
          <p>An overview of the projects/frameworks I have worked on. To know more about these projects <a href="https://github.com/VishnuKrishnathu">click here</a></p>
         </div>
        <div class = "image"></div>
      </div>
    `;
    card.innerHTML = innercontent;
  }
};
