const navButtons = document.querySelectorAll(".navButton");
const backButton = document.querySelector(".left-arrow");
const forwardButton = document.querySelector(".right-arrow");
const imagesDiv = document.querySelector(".images");

let currentImage = 0;
let imagePosition = 0;

const next = () => {

  currentImage == 4 ? currentImage = 0 : currentImage += 1;
  updateNavButtons();
  imagePosition = 600 * currentImage;
  imagesDiv.style.right = imagePosition + "px";

}

const prev = () => {

  currentImage == 0 ? currentImage = 4 : currentImage -= 1;
  updateNavButtons();
  imagePosition = 600 * currentImage;
  imagesDiv.style.right = imagePosition + "px";

}

const navSelect = (event) => {
  
  currentImage = Number(event.target.id);
  updateNavButtons();
  imagePosition = 600 * currentImage;
  imagesDiv.style.right = imagePosition + "px";
  
}

const updateNavButtons = () => {

  navButtons.forEach((btn) => btn.id == currentImage ? 
                              btn.classList.add("active") : 
                              btn.classList.remove("active"));
                              
}


forwardButton.addEventListener("click", next);
backButton.addEventListener("click", prev);
navButtons.forEach((btn) => btn.addEventListener("click", navSelect));