const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    o.querySelector("input").checked = true;
    optionsContainer.classList.remove("active");
  });
});

window.onclick = function(e) {
  if (!e.target.matches('.selected')) {
    if (optionsContainer.classList.contains('active')) {
      optionsContainer.classList.remove('active');
    }
  }
}