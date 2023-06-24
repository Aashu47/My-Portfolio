//preloder
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  });

//cv
function downloadCV() {
    var cvUrl = 'https://drive.google.com/file/d/1JC0pnBYao6HqstIKbQLY9-ZxaRwNuFgx/view?usp=sharing';
  
    // Create a hidden anchor element
    var anchorElement = document.createElement('a');
    anchorElement.href = cvUrl;
    anchorElement.download = 'Aayushi cv.pdf';
  
    // Trigger the click event on the anchor element
    anchorElement.click();
  }
  
  // Attach the downloadCV function to a button or any other trigger element
  var downloadButton = document.getElementById('button');
  downloadButton.addEventListener('click', downloadCV);
  
//navbar icons
const menuIcon = document.getElementById("menu-icon");
const cancelIcon = document.getElementById("cancel-icon");
const navItems = document.querySelectorAll(".nav-items div a");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.add("active");
});

cancelIcon.addEventListener("click", () => {
  navbar.classList.remove("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});