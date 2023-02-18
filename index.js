const continueButton = document.getElementById("continueButton");
const closeButton = document.getElementById("closeButton");
const popupSection = document.getElementById("popupSection");
const popupContainer = document.querySelector(".popup-container");

continueButton.addEventListener("click", ()=>{
    popupSection.classList.remove("active");
    popupContainer.classList.remove("active-popup");
});
closeButton.addEventListener("click", ()=>{
    popupSection.classList.add("active");
    popupContainer.classList.add("active-popup");
});
