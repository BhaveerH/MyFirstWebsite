const btnDesign = document.getElementById('linkDesign');
const btnIndex = document.getElementById('linkIndex');
const btnBlog = document.getElementById('linkBlog');
let iSlideCount = 0;
slideShow();

function slideShow() {
  let slideDeck = document.getElementsByClassName("mySlideShow");
  for (let i = 0; i < slideDeck.length; i++) {
    slideDeck[i].style.display = "none";
  }
  iSlideCount++;
  if (iSlideCount > slideDeck.length) {iSlideCount = 1}
  slideDeck[iSlideCount-1].style.display = "block";
  setTimeout(slideShow, 3000); 
}

function designLinkClick() {
  window.open("design.html", "_blank");
}

function homeLinkClick() {
  window.open("../index.html", "_blank");
}

function blogLinkClick() {
  window.open("blog.html", "_blank");
}

function mobileNav() {

  const bars = document.querySelector(".bars");
  const header = document.getElementById('HeaderNav');

  bars.addEventListener('click', e => {

    header.classList.toggle("mover");

  });

}
  mobileNav();

btnDesign.addEventListener('click', designLinkClick);
btnIndex.addEventListener('click', homeLinkClick);
btnBlog.addEventListener('click', blogLinkClick);
