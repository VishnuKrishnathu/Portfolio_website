const labels = document.querySelectorAll(".project-list > label");
const inputs = document.querySelectorAll(".project-list > input");

const projects = {
  React: {
    name: ["React 1", "React 2", "React 3"],
    link: ["#", "#"],
  },
  Python: {
    name: ["Python project 1", "Python project 2", "Python project 3"],
    link: ["#", "#", "#"],
  },
  Java: {
    name: ["Anroid java project"],
    link: ["#"],
  },
  generateInnerContent: function (label_text) {
    let content = "";
    // console.log(this[label_text]?.name);
    let project_label = this[label_text];
    let i = 0;
    project_label.name.forEach((project) => {
      content = content.concat(
        `<a href=${project_label.link[i]}>${project}</a>`
      );
    });
    return content;
  },
};
labels.forEach((label) => {
  label.addEventListener("click", (e) => {
    inputs.forEach((input) => {
      if (input.checked) {
        let innercontent = projects.generateInnerContent(label.innerText);
        document.querySelector("#project-list").innerHTML = innercontent;
      }
    });
  });
});
