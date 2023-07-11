const toggleBtn = document.querySelector(".ri-menu-3-fill");
const dropDown = document.querySelector(".turun");

toggleBtn.addEventListener("click", function() {
    dropDown.classList.toggle("open");
})

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});